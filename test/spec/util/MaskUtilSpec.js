import { maskString } from 'lib/util/MaskUtil';

describe('util/MaskUtil', function() {

  it('should mask all but last 4 chars by default', function() {
    // when
    const masked = maskString('1234567890');

    // then
    expect(masked).to.equal('******7890');
  });

  it('should allow custom mask character and visible chars', function() {
    // when
    const masked = maskString('abcdef', '#', 2);

    // then
    expect(masked).to.equal('####ef');
  });

  it('should mask short strings completely', function() {
    // when
    const masked = maskString('abc', '*', 4);

    // then
    expect(masked).to.equal('***');
  });

});
