import { Math } from "es6-shim";

export class RandomTool{
    constructor(public max_number:number){
        if(this.max_number <= 0){
            this.max_number = 2;
        }
    }

    get_random_number(){
        let rs = Math.random() * 10;
        let rn = Math.ceil(rs);
        let index = rn % this.max_number;
        return index;
    }
}