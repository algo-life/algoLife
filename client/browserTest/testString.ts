describe("addTwo", function () {
  it("should return the input number plus 2", function () {
    chai.expect(addTwo(2)).to.equal(4);
    chai.expect(addTwo(0)).to.equal(2);
    chai.expect(addTwo(-3)).to.equal(-1);
  });
});

describe("isNegativeOrOdd", function () {
  it("should return true if number is odd", function () {
    chai.expect(addTwo(2)).to.equal(false);
    chai.expect(addTwo(-10)).to.equal(true);
    chai.expect(addTwo(9)).to.equal(true);
  });
});

  describe('isNegativeOrOdd', () => {
    it('should return true if number is odd', () => {
      expect(isNegativeOrOdd(1)).to.eql(true);
      expect(isNegativeOrOdd(3)).to.eql(true);
      expect(isNegativeOrOdd(5)).to.eql(true);
    });