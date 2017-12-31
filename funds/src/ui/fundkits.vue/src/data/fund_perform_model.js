/*jshint esversion: 6 */
import * as data from './all_fund_perform_list_20171222.json';
import * as _ from 'lodash';

export class FundPerformModel{
    constructor(){}

    load_perform_list(){
        let raw_list = data.fund;
        let funds_perform_list =  [];
        _.each(raw_list, function(fv) { 
            funds_perform_list.push(new FundPerform(fv.code, fv.name, fv.category, fv.score, fv.percent, fv.suggestion, fv.conclude)); 
        });
        return funds_perform_list;
    }
}

export class FundPerform{
    constructor(code, name, category, score, percent, suggestion, conclude){
        this.code = code;
        this.name = name;
        this.category = category;
        this.score = score;
        this.percent = percent;
        this.suggestion = suggestion;
        this.conclude = conclude;
    }
}