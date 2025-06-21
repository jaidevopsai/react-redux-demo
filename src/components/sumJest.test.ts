import {sum, multiply} from './sumJest';

describe('sum function', () => {
// This is a Jest test suite for the sum function
    it('should return the sum of two positive numbers', () => {
        expect(sum(1,2)).toBe(3);
    });
    it('should return the multiplication of two numbers', () => {
        expect (multiply(2,3)).toBe(6);
    });

})
