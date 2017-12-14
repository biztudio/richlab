import Vue from 'vue';
import Component from 'vue-class-component'
import VueRouter from 'vue-router';
import fundgrid from './fundgrid/grid.vue';
import fundgrid_mb from './fundgrid/grid.m.vue';
import ElememtUI  from 'element-ui';

Vue.use(ElememtUI);
Vue.component('fundgrid', fundgrid);
Vue.component('fundgrid_mb', fundgrid_mb);

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