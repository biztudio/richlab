import Vue from 'vue';
import Component from 'vue-class-component'
import VueRouter from 'vue-router';
//import { RandomTool } from './common/random';
import fundgrid from './fundgrid/grid.vue';
import ElememtUI  from 'element-ui';

//let rTool = new RandomTool(10);
//console.log(rTool.get_random_number());

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