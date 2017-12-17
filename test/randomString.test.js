import test from 'ava';
import {expect} from 'chai'
import randomString from '../randomString';

test('randomString', t => {
  // should return the default string
  expect(randomString().length).to.eql(6)
  // 
  expect(randomString("","",1).length).to.eql(0)  
  t.pass()
})