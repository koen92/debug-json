import { expect } from 'chai';
import jsonFormatArgs from '../src/jsonFormatArgs';

describe('jsonFormatArgs', () => {
  it('should return an array with a single string', () => {
    expect(jsonFormatArgs()).to.be.an('array');
    expect(jsonFormatArgs()).to.have.lengthOf(1);
    expect(jsonFormatArgs()[0]).to.be.a('string');
  });
  describe('called without arguments', () => {
    it('should return a json object without properties', () => {
      expect(jsonFormatArgs()).to.deep.equal(['{}']);
    });
  });
  describe('called with a simple string', () => {
    it('should set the message property', () => {
      expect(jsonFormatArgs('simple string')).to.deep.equal(['{"message":"simple string"}']);
    });
  });
  describe('called with an attachment', () => {
    it('should attach a string', () => {
      expect(jsonFormatArgs('with string', 'attachment string'))
        .to.deep.equal(['{"message":"with string","attachments":["attachment string"]}']);
    });
    it('should attach a number', () => {
      expect(jsonFormatArgs('with number', 42))
        .to.deep.equal(['{"message":"with number","attachments":[42]}']);
    });
    it('should attach an object', () => {
      expect(jsonFormatArgs('with object', { foo: 'bar' }))
        .to.deep.equal(['{"message":"with object","attachments":[{"foo":"bar"}]}']);
    });
  });
  describe('called with a recursive object', () => {
    it('should set the formatError property', () => {
      const x = { key: 'value' };
      const y = { x };
      x.y = y;
      expect(jsonFormatArgs('recursive arg', x))
          // eslint-disable-next-line max-len
        .to.deep.equal(['{"message":"recursive arg","formatError":{"name":"TypeError","message":"Converting circular structure to JSON"}}']);
    });
  });
});
