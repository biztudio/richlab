import * as data from '../../data/fundlist_db.json';

export default class GridModel{
    constructor(){
        
    }

    list_fund(){
        const fundlist = (<any>data).fund;
        console.log(fundlist);
    }

}