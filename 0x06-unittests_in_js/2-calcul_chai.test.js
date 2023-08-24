/* eslint-disable jest/valid-expect */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const chai = require('chai');
const calculateNumber = require('./2-calcul_chai').calculateNumber;

const expect = chai.expect;
// You can assume a and b are always number

describe("calculateNumber", function() {
  it("should calculate the sum of 2 numbers", function() {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    expect(calculateNumber('SUM', 10.6, 4.1)).to.equal(15);
  });

  it("should calculate the substraction of 2 numbers", function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', -1, -1)).to.equal(0);
  });

  it("should divide the divide a number by another", function () {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
