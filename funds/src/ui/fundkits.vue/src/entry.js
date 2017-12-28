/*jshint esversion: 6 */
import 'babel-polyfill';
import Vue from 'vue';
import axios from 'axios';

import toolbar from './components/toolbar/toolbar.vue';

Vue.component('maintoolbar', toolbar);

var richApp = new Vue({
    el:'#richapp',

    created:function(){

        /*
        console.log('created..');
        //axios.get(`http://richlab.applinzi.com/fund_perform/000993`)
        axios.get(`http://localhost:5050/fund_perform/000993`)
        .then(response => {
            // JSON responses are automatically parsed.
            console.log('api data for:' + response.data.name);
            console.log(response.data);

        })
        .catch(e => {
            this.errors.push(e)
            console.log(this.errors);
        });
        */
    }
});