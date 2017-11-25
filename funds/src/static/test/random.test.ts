declare var jest, describe, it, test, expect, beforeAll, afterAll, beforeEach, afterEach;

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