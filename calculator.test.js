const calculator = require('./calculator')

describe('calculator methods ', () => { 
    test('calculates the sum of two values', () => {
        const calc = new calculator();
        expect(calc.add(5,5)).toBe(10);
      });
      test('calculates the subctraction of two values', () => {
        const calc = new calculator();
        expect(calc.substract(10,5)).toBe(5);
      });
      test('calculates the multiplication of two values', () => {
        const calc = new calculator();
        expect(calc.multiply(2,5)).toBe(10);
      });
      test('calculates the division of two values', () => {
        const calc = new calculator();
        expect(calc.divide(10,2)).toBe(5);
      }); 
 })