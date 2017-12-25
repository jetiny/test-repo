import test from 'ava'
import {expect} from 'chai'
import randomString from '../src/randomString'


test('randomString', t => {
  expect(randomString()).to.be.a('string')
  expect(randomString(8,'u',true).length).to.eql(8)  
  t.pass()
})
