const { addTwo } = require('../challenges/add-two.js');

describe('addTwo test', () => {
  it('should return true if the return value is num + 2', () => {
    expect(addTwo(1)).toBe(3);
    expect(addTwo(0)).toBe(2);
    expect(addTwo(-3)).toBe(-1);
  });
});
