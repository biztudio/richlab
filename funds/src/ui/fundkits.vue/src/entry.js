/*jshint esversion: 6 */
//import 'babel-polyfill';
import Vue from 'vue';
import axios from 'axios';
import toolbar from './components/toolbar/toolbar.vue';
import diagnosis from './components/diagnosiscard/diagnosis.vue';
import * as fund_basic_data from './data/fundlist_db.json'

//axios.defaults.headers.common['Authorization'] = "Bearer " + getAPIToken();
Vue.prototype.$http = axios;
Vue.prototype.fund_basic_list = fund_basic_data.fund;

Vue.component('maintoolbar', toolbar);
Vue.component('diagnosiscard', diagnosis);

var richApp = new Vue({
    el:'#richapp',

    created:function(){
      
    }
});