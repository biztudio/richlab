/*jshint esversion: 6 */
//import 'babel-polyfill';
import Vue from 'vue';
import axios from 'axios';
import * as _ from 'lodash';
import {Autocomplete}  from 'element-ui';
import toolbar from './components/toolbar/toolbar.vue';
import diagnosis from './components/diagnosiscard/diagnosis.vue';
import * as fund_basic_data from './data/fundlist_db.json';
import fundkits_env from './data/fundkits.js';

//axios.defaults.headers.common['Authorization'] = "Bearer " + getAPIToken();
//Vue.prototype.fund_basic_list = fund_basic_data.fund;
Vue.prototype.$http = axios;
Vue.prototype.service_base_url = fundkits_env.service_base_url;

Vue.component(Autocomplete.name, Autocomplete);
Vue.component('maintoolbar', toolbar);
Vue.component('diagnosiscard', diagnosis);

var richApp = new Vue({
    el:'#richapp',
    data(){
        return{
            mixed_fundfilter:'',
            fund_list:[],
            funds_basic_list:[],
            fund_code_for_diagnosis:'123456'//'110022'
        };
    },
    created:function(){
        let self = this;
        self.funds_basic_list = [];
        _.each(fund_basic_data.fund, function(fv) { self.funds_basic_list.push(fv); });
    },

    methods:{
        relist_fund(){
            console.log('Filter Changed');
        },
        
        handleSelect(item) {//for autocomplete input
            //What to do with the selected suggestion
            console.log(item.code);
            this.fund_code_for_diagnosis = item.code;
        },

        querySearch(queryString, callback){
            let funds = this.filter_fund(queryString);
            this.fund_list = [];
            for(let fund of funds){
                this.fund_list.push({'value':fund.name, 'code':fund.code});
            }
            callback(this.fund_list);
        },

        filter_fund(filter){
            let filterd_list = [];
            if(filter){      
                let self = this;
                //console.table(self.funds_basic_list);    
                for(let fi of self.funds_basic_list){
                    //console.log(fi.code + ' ' + fi.name);
                    if(self.regex_map(filter, fi.code) || self.regex_map(filter, fi.name)){
                        filterd_list.push(fi);
                    }
                }
            }  
            else{
                filterd_list = this.funds.slice(0);
            }
            return filterd_list;
        },

        regex_map(filter, text){
            let pattern = new RegExp(filter,'g');
            return pattern.test(text);
        }
    }   
});