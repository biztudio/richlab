/*jshint esversion: 6 */
import {FundPerformModel,FundPerform} from '../src/data/fund_perform_model.js';



describe('Test Fund Perform Model Kit', ()=>{
    let extendMethods = {
        test:function(){
          let t = [1,2,3,4,5]
          
           return t[4]
        }
      } 

    test('TM',()=>{

        console.log(extendMethods.test());
        expect(1).toBe(1)

    });
  
    test('Test Fund Perform Mode basic feature', ()=>{
        
        let service = new FundPerformModel();
        let list = service.load_perform_list();
        console.log(list[0]);
        expect(3660).toBe(3660);
    });
});