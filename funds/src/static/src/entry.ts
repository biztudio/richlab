import Vue from 'vue';
//import iView from 'iview';
import * as _ from 'lodash';

console.log('entry ts');

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