/*jshint esversion: 6 */
import {FundPerformModel,FundPerform} from '../../data/fund_perform_model.js';

export default{
    props:[
        'category'
    ],

    data(){
        return{
            _perform_list:[],
            _list_title:{
                '1':'',
                '2':'',
                '3':'',
                '4':''
            }
        }
    },

    created:function(){
        let perform_query_service = new FundPerformModel();
        let category_map = {
            '1':['指数型'],
            '2':['混合型','股票型'],
            '3':['债券型'],
            '4':['QDII']
        };
        let category_filter = category_map[this.category];
        let good_funds = perform_query_service
        .load_perform_list()
        .filter(fp=>fp.score >= 80 && category_filter.includes(fp.category))
        .sort((a, b) => b.score - a.score);
        //console.log(good_funds);
        this._perform_list = good_funds.slice(0, 50);
    }
}