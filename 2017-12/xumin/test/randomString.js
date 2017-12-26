import test from 'ava'
import {expect} from 'chai'
import randomString from '../src/randomString.js'

test('randomString', t => {
  expect(randomString()().match(/[0-9a-zA-Z]/g).length).to.eql(6)
  expect(randomString()(6, '$ld', true).match(/[0-9a-z]/g).length).to.eql(6)
  expect(randomString()(6, '$lu', true).match(/[a-zA-Z]/g).length).to.eql(6)
  expect(randomString()(6, 'l', false).match(/[a-z]/g).length).to.eql(6)
  expect(randomString()(6, 'u', false).match(/[A-Z]/g).length).to.eql(6)
  expect(randomString()(6, '$', false).match(/[^0-9a-zA-Z]/g).length).to.eql(6)
  t.pass()
})