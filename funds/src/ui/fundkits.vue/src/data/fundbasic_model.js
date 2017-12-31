/*jshint esversion: 6 */
import * as data from './fundlist_db.json';
import * as _ from 'lodash';

export class FundBasicModel{
    constructor() {}

    list_fund(){
        //console.log(data.fund)
        let fundlist = data.fund;
        let funds =  [];
        _.each(fundlist, function(fv) { funds.push(new FundBasic(fv.code, fv.name, fv.fee)); });
        return funds;
    }
}

export class FundBasic {    
    constructor(code, name, fee) {
        this.code = code;
        this.fee = fee;
        this.name = name;
      }
}