import Vue from 'vue';
//import iView from 'iview';
import * as _ from 'lodash';
import { RandomTool } from './common/random';

let rTool = new RandomTool(10);
console.log(rTool.get_random_number());

let v = new Vue({
    el: "#app",
    template: `
    <div>
        <div>Hello {{name}}!</div>
        Name: <input v-model="name" type="text">
    </div>`,
    data: {
        name: "World"
    }
});