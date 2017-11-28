import * as data from '../../data/fundlist_db.json';
import * as _ from 'lodash';
import { Array } from 'es6-shim';

class GridModel{
    constructor(){
        
    }

    list_fund():Array<Fund>{
        const fundlist = (<any>data).fund;
        let funds = new Array<Fund>();
        _.forEach(fundlist, function(value) {
            funds.push(value);
        });
        console.log(funds);
        return (funds);
    }

}

class Fund {
    constructor(public code:string, public name:string, public fee:string){}
}

export {
    Fund,
    GridModel
}