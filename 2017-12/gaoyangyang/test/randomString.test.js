import test from 'ava';
import {expect} from 'chai'
import randomString from '../randomString';

test('randomString', t => {
  // should return the default string
  expect(randomString()).to.be.a('string')
  // symbols 参数
  expect(randomString("","",1)).to.eql('')  
  t.pass()
})