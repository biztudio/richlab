import * as data from '../../data/fundlist_db.json';
import * as _ from 'lodash';
import { Array, Number } from 'es6-shim';
import { IFund, Fund as FundEntity, RichlabDatabase } from '../common/storage';
//import { install } from 'element-ui';
import { log } from '../common/class_decorator';

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

class Fund {
    
    constructor(public code:string, public name:string, public fee:string){}

    //@log
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
}

export {
    Fund,
    GridModel
}