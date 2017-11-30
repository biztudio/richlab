import * as data from '../../data/fundlist_db.json';
import * as _ from 'lodash';
import { Array } from 'es6-shim';
import { IFund, Fund as FundEntity, RichlabDatabase } from '../common/storage';

class GridModel{
    funds:Array<Fund>;
    db:RichlabDatabase

    constructor(){
        this.db = new RichlabDatabase();
    }

    save_fundlist_to_local_promise(fund_list:Array<Fund>){
        console.log('Saving...');
        for(let fund of fund_list){            
            this.db.fund.add({
                code: fund.code,
                name: fund.name,
                fee: fund.fee
            });
        }
    }

    save_fund_to_local_promise(fund:Fund){
        this.db.fund.add({
            code: fund.code,
            name: fund.name,
            fee: fund.fee
        });
    }

    async list_fund():Promise<Fund[]>{        
        let instance = this;
        instance.funds = new Array<Fund>();
        let existed_count:number = 0;
        await instance.db.fund.count(c=>{
            console.log(c);  
            existed_count = (c);
         });
        if(!existed_count){
            console.log('Saving...');
            const fundlist = (<any>data).fund;
            /*
            此处使用_.forEach而不是for...of, 是由于数据源是一个大的对象而非列表，
            如果是列表（数组）的话，for...of 则性能好一些
            */
            _.each(fundlist, function(fv) {
                //instance.funds.push(fv);
                instance.save_fund_to_local_promise(new Fund( fv.code, fv.name, fv.fee ));
            });
        }
        let flist = await await this.db.fund.toArray();
        for(let fe of flist){
            instance.funds.push(new Fund(fe.code, fe.name, fe.fee));
        }   
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
}

export {
    Fund,
    GridModel
}