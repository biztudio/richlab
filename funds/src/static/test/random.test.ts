/*
  [需要首先进行环境声明]
  * 环境声明向TypeScript域中引入一个变量，这对生成的JS里将没有任何影响;
  * 不指定类型，将默认采用 any 类型；
  * document等JS内建的对象通过文件‘lib.d.ts’默认包含在TS中;
    举例：可以这样引入jQuery库
          declare var $;
*/
declare var jest, describe, it, test, expect, beforeAll, afterAll, beforeEach, afterEach;
/*
引入被测试模块
*/
import { RandomTool } from '../src/common/random';

describe('Test Class RandomTool', () =>{

    beforeAll(() => {

    });
      
    afterAll(() => {
        
    });

    beforeEach(() => {
        
    });
      
    afterEach(() => {
        
    });

    test('Test Random Index', () => {
        let tool = new RandomTool(9);
        let index = tool.get_random_number();
        expect(index).toBeLessThanOrEqual(8);
    });

    test('Test Random Index, parameter is 0 the index should be less or equal to 1.', () => {
        let tool = new RandomTool(0);
        let index = tool.get_random_number();
        expect(index).toBeLessThanOrEqual(1);
    })
});