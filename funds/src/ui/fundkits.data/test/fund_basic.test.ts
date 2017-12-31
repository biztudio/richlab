declare var jest, describe, it, test, expect, beforeAll;
import { FundBasic, FundBasicModel} from '../src/model/fundbasic/fundbasic_model';

describe('Fund Basic List Test', ()=>{
    test('The fund basic records count should be 3660', ()=>{
        let service = new FundBasicModel();
        let list = service.list_fund();
        /*
        for(let fund of list){
            console.log(fund.code + ': ' + fund.name);
        }
        */
        expect(list.length).toBe(3660);
    })
});