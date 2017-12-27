/*jshint esversion: 6 */
import 'babel-polyfill';
import Vue from 'vue';
import axios from 'axios';

//使用axios.create()创建一个axios对象，然后配置跨域的头信息，后面所有的请求，全部使用该对象。
/*
const instance = axios.create({  
    baseURL: 'http://127.0.0.1:5000',//serverPort,  
    timeout: 20000,  
    validateStatus:function(status){  
        return status < 500;  
    },  
    headers: {  
        // 跨域请求 这个配置不能少  
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",  
        'Accept': 'application/json'  
    }  
});  
*/

var richApp = new Vue({
    el:'#richapp',

    created:function(){
        console.log('created..');
        
        axios.get(`http://127.0.0.1:5000/fund_perf/2017`)
        .then(response => {
            // JSON responses are automatically parsed.
            console.log('api data:');
            console.log(response.data);
        })
        .catch(e => {
            this.errors.push(e)
            console.log(this.errors);
        });
        /**/
    }
});