import Vue from 'vue';
import Component from 'vue-class-component'
import VueRouter from 'vue-router';
import fundgrid from './fundgrid/grid.vue';
import ElememtUI  from 'element-ui';

import * as m from './declaration.demo/mydtm';
console.log(m);

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