/*jshint esversion: 6 */
import {FundBasicModel,FundBasic} from '../src/data/fundbasic_model.js';

describe('Test Fund Basic Model Kit', ()=>{
  
    test('Test Fund Basic Mode basic feature', ()=>{
        
        let service = new FundBasicModel();
        let list = service.list_fund();
        console.log(list[0].code + '' + list[0].name);
        expect(list.length).toBe(3660);
        
    });
});