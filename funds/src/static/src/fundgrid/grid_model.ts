import * as data from '../../data/fundlist_db.json';
import * as _ from 'lodash';
import { Array } from 'es6-shim';

class GridModel{
    funds:Array<Fund>;

    constructor(){
        
    }

    list_fund():Array<Fund>{
        const fundlist = (<any>data).fund;
        let instance = this;
        instance.funds = new Array<Fund>();
       /*
       此处使用_.forEach而不是for...of, 是由于数据源是一个大的对象而非列表，
       如果是列表（数组）的话，for...of 则性能好一些
       */
        _.each(fundlist, function(value) {
            instance.funds.push(value);
        });
        
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