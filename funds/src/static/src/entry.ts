import Vue from 'vue';
import Component from 'vue-class-component'
import VueRouter from 'vue-router';
import fundgrid from './fundgrid/grid.vue';
import ElememtUI  from 'element-ui';

//import {MyDtm} from './declaration.demo/mydtm';
//let dtm = new MyDtm();
//console.log(dtm);
//console.log(dtm.code);

Vue.use(ElememtUI);
Vue.component('fundgrid', fundgrid);

let v = new Vue({
    el: "#app",   
    data: {
        name: "",
        mixed_fundfilter:''
    },
    methods:{
        relist_fund(){
            console.log('Filter Changed');
        }
    }   
});