import Vue from 'vue';
import Component from 'vue-class-component'
import VueRouter from 'vue-router';
import ElementUI from 'element-ui'
import * as _ from 'lodash';
import { RandomTool } from './common/random';
import fundgrid from './fundgrid/grid.vue';

let rTool = new RandomTool(10);
console.log(rTool.get_random_number());

Vue.use(ElementUI);
Vue.component('fundgrid', fundgrid);

let v = new Vue({
    el: "#app",   
    data: {
        name: "World"
    }   
});