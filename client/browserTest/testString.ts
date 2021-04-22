describe('addTwo', function () {
  it('should return the input number plus 2', function () {
    chai.expect(addTwo(2)).to.equal(4);
    chai.expect(addTwo(0)).to.equal(2);
    chai.expect(addTwo(-3)).to.equal(-1);
  });
});

describe('size', function () {
  it('should return the correct size of arrays', function () {
    chai.expect(size([])).to.equal(0);
    chai.expect(size([1])).to.equal(1);
  });
  it('should return the correct size of objects', function () {
    chai.expect(size({ a: 1, b: 2 })).to.equal(2);
    chai.expect(size({})).to.equal(0);
    chai.expect(size({ a: 1, b: 2, length: 1 })).to.equal(3);
  });
});

describe('size', () => {
  it('should return the correct size of arrays', () => {
    expect(size([])).to.eql(0);
    expect(size([1])).to.eql(1);
  });
  it('should return the correct size of objects', () => {
    expect(size({ a: 1, b: 2 })).to.eql(2);
    expect(size({})).to.eql(0);
    expect(size({ a: 1, b: 2, length: 1 })).to.eql(3);
  });
});
