import test from 'ava'
import {expect} from 'chai'
import randomString from '../src/randomString'


test('randomString', test => {
  expect(randomString(10, 'd', '0123456789').indexOf('1') >= 0).to.eql(true)
  expect(randomString(1, '$').length).to.eql(1)
  expect(randomString(6, '$dul').length === 6).to.eql(true)
  test.pass()
})