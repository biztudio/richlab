import Vue from 'vue';
import Component from 'vue-class-component'
import VueRouter from 'vue-router';
import fundgrid from './fundgrid/grid.vue';
import fundgrid_mb from './fundgrid/grid.m.vue';
import ElememtUI  from 'element-ui';
import { Fund, GridModel } from './fundgrid/grid_model';
import { Array } from 'es6-shim';

Vue.use(ElememtUI);
Vue.component('fundgrid', fundgrid);
Vue.component('fundgrid_mb', fundgrid_mb);

let v = new Vue({
    el: "#app",   
    data: {
        name: "",
        mixed_fundfilter:'',
        fund_model:new GridModel(),
        fund_list:new Array()
    },

    created:function () {
        this.fund_model.list_fund();
    },

    methods:{
        relist_fund(){
            console.log('Filter Changed');
        },
        
        handleSelect(item:any) {//for autocomplete input
            //What to do with the selected suggestion
            //console.log(item);
        },

        querySearch(queryString:string, callback:any){
            let funds = this.fund_model.filter_fund(queryString);
            this.fund_list = new Array();
            for(let fund of funds){
                this.fund_list.push({'value':fund.name, 'code':fund.code});
            }
            callback(this.fund_list);
        }
    }   
});