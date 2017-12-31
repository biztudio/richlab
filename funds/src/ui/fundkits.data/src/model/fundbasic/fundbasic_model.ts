import * as data from './fundlist_db.json';
import * as _ from 'lodash';

class FundBasicModel{
    list_fund():Array<FundBasic>{
        let fundlist = (<any>data).fund;
        let funds =  new Array<FundBasic>();
        _.each(fundlist, function(fv) { funds.push(fv); });
        return funds.slice(0);
    }
}

class FundBasic {    
    constructor(public code:string, public name:string, public fee:string){ }
}

export{
    FundBasic,
    FundBasicModel
}