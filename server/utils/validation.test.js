const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
      var param = 1234;
      var valid = isRealString(param);
      expect(valid).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var param = '     ';
    var valid = isRealString(param);
    expect(valid).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var param = '  This Should be Valid   ';
    var valid = isRealString(param);
    expect(valid).toBe(true);
  });

});
