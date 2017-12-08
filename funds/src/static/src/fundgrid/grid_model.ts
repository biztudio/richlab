import * as data from '../../data/fundlist_db.json';
import * as _ from 'lodash';
import { Array, Number } from 'es6-shim';
import { IFund, Fund as FundEntity, RichlabDatabase } from '../common/storage';
import { 
    ModelMonitorAttribute as ModelMonitor, 
    MethodValidationAttribute as MethodValidation,
    FlagAttribute as Flag,
    RequiredParamAttribute as RequiredParam
} from '../common/class_decorator';

class GridModel{
    funds:Array<Fund>;
    db:RichlabDatabase

    constructor(){
        this.db = new RichlabDatabase();
    }

    private async save_fundlist_to_local_promise(fund_entity_list:Array<FundEntity>){
        console.log('Local Saving...');
        await this.db.fund.bulkAdd(fund_entity_list).then(() => {
            console.log('Saved');
        });
    }

    private async save_fund_to_local_promise(fund:Fund){
        await this.db.fund.add({
            code: fund.code,
            name: fund.name,
            fee: fund.fee
        });
    }

    async list_fund():Promise<Fund[]>{        
        let instance = this;
        let existed_count:number = await instance.db.fund.count();
        if(!existed_count){
            const fundlist = (<any>data).fund;
            /*
            此处使用_.forEach而不是for...of, 是由于数据源是一个大的对象而非列表，
            如果是列表（数组）的话，for...of 则性能好一些
             */
            let fund_entity_list = new Array<FundEntity>();
            _.each(fundlist, function(fv) { fund_entity_list.push(fv); });
            await instance.save_fundlist_to_local_promise(fund_entity_list);
        }
        instance.funds = new Array<Fund>();
        await instance.db.fund.toArray().then(fes => {
            console.log(fes.length);
            instance.funds = fes.map(fe => {return new Fund(fe.code, fe.name, fe.fee)});
        })
        return instance.funds.slice(0);   
    }

    filter_fund(filter:string):Array<Fund>{
        let filterd_list = new Array<Fund>();
        if(filter){            
            for(let fi of this.funds.slice(0)){
                if(this.regex_map(filter, fi.code) || this.regex_map(filter, fi.name)){
                    filterd_list.push(fi);
                }
            }
        }  
        else{
            filterd_list = this.funds.slice(0);
        }
        return filterd_list;
    }

    regex_map(filter:string, text:string):boolean{
        let pattern:RegExp = new RegExp(filter,'g');
        return pattern.test(text);
    }

}

export enum Fund_Category {
    Hybrid,//混合型 0
    Index,//指数型 1
    Equity,//股票型 2
    Bond, //债券型 3
    QDII,// 4
    Other //5
};

@ModelMonitor
class Fund {    
    //如果属性以 public category?:number 置于构造函数参数时，装饰器无法对prototype原型进行修改
    category?:number

    constructor(public code:string, public name:string, public fee:string/*, public category?:number*/){
        //注意比较类装饰器与类构造函数的被调用顺序
        //console.log(`Fund class ${name}: The instance is initialized.`);
       
        if(!this.category){
            this.category = Fund_Category.Equity;
        }
        //console.log(`${this.name}'s category is set to ${this.category}`);
    }
   
    //@Flag('fee check')
    get_fee_number():number{
        if(this.fee == '0'){
            return 0;
        }
        else if(this.fee.endsWith('%')){
            let vals = this.fee.substring(0, this.fee.length - 1);
            return (Number(vals));
        }        
        return 0;
    }

    @Flag('index name check')
    @MethodValidation
    check_300index_fund_by_name_demo(@RequiredParam name:string):Boolean{
        let pattern:RegExp = new RegExp('300','g');
        return pattern.test(name);
    }
}

export {
    Fund,
    GridModel
}