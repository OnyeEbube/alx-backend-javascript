const assert = require('assert');
const calculateNumber = require('./1-calcul');

// Describe block to group related test cases
describe('calculateNumber', () => {
  // Test case for addition
  it('should add two rounded numbers correctly', () => {
    const result = calculateNumber('SUM', 3.2, 2.7);
    assert.strictEqual(result, 6); // The expected result after rounding
  });

  // Test case for subtraction
  it('should subtract two rounded numbers correctly', () => {
    const result = calculateNumber('SUBTRACT', 5.8, 2.3);
    assert.strictEqual(result, 4); // The expected result after rounding
  });

  // Test case for division
  it('should divide two rounded numbers correctly', () => {
    const result = calculateNumber('DIVIDE', 8.5, 2);
    assert.strictEqual(result, 4); // The expected result after rounding
  });

  // Test case for division by zero
  it('should return "Error" when dividing by zero', () => {
    const result = calculateNumber('DIVIDE', 7, 0);
    assert.strictEqual(result, 'Error'); // The expected error message
  });
});
