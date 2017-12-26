// 测试用例
import test from 'ava'
import {expect} from 'chai'
import randomString from '../src/randomString.js'

test('randomString', t => {
  expect(/[a-z]*/.test(randomString(6,'l'))).to.eql(true)
  expect(/[0-9a-z]*/.test(randomString(4, 'd', 'haha'))).to.eql(true)
  expect(/[A-Z]*/.test(randomString(6,'u'))).to.eql(true)
  expect(/[0-9a-zA-Z]*/.test(randomString(6, 'dlu'))).to.eql(true)
  expect(/[0-9a-zA-Z]*/.test(randomString(6, 'd$'))).to.eql(true)
  expect(randomString().length >= 5).to.eql(true)
  t.pass()
})