import { expect } from 'chai';
import { parse, stringify, compile } from '../src/index.js';

describe('ass-compiler', () => {
  it('should provide parse function and compile function', () => {
    expect(parse).to.be.a('function');
    expect(stringify).to.be.a('function');
    expect(compile).to.be.a('function');
  });
});
