declare var jest, describe, it, test, expect, beforeAll;
import { GridModel } from '../src/fundgrid/grid_model'; 
import { Array } from 'es6-shim';

describe('Test regex map feature fund list model', ()=>{
    let fund_model = new GridModel();

    test('Test Code Exactly, 377016 maps 377016', ()=>{
        let code:string = '377016';
        let filter:string = '377016';
        let result = fund_model.regex_map(filter, code);
        expect(result).toBeTruthy();
    });

    test('Test Code As Part, 3770 maps 377016', ()=>{
        let code:string = '377016';
        let filter:string = '3770';
        let result = fund_model.regex_map(filter, code);
        expect(result).toBeTruthy();
    });

    test('Test Code As Part, 3771 does not maps 377016', ()=>{
        let code:string = '377016';
        let filter:string = '3771';
        let result = fund_model.regex_map(filter, code);
        expect(result).toBeFalsy();
    });

    test('Test Name Exactly, 上投摩根亚太优势混合 maps 上投摩根亚太优势混合', ()=>{
        let name:string = '上投摩根亚太优势混合';
        let filter:string = '上投摩根亚太优势混合';
        let result = fund_model.regex_map(filter, name);
        expect(result).toBeTruthy();
    });

    test('Test Name Exactly, 摩根亚太 maps 上投摩根亚太优势混合', ()=>{
        let name:string = '上投摩根亚太优势混合';
        let filter:string = '摩根亚太';
        let result = fund_model.regex_map(filter, name);
        expect(result).toBeTruthy();
    });

    test('Test Name As Part, 优势混合 maps 上投摩根亚太优势混合', ()=>{
        let name:string = '上投摩根亚太优势混合';
        let filter:string = '优势混合';
        let result = fund_model.regex_map(filter, name);
        expect(result).toBeTruthy();
    });

    test('Test Name As Part, 优势成长 does not maps 上投摩根亚太优势混合', ()=>{
        let name:string = '上投摩根亚太优势混合';
        let filter:string = '优势成长';
        let result = fund_model.regex_map(filter, name);
        expect(result).toBeFalsy();
    });
});