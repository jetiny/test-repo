
import test from 'ava'
import {expect} from 'chai'
import randomString from '../src/randomString.js'

test('randomString', t => {
  expect(randomString().length).to.eql(6)
  expect(randomString(6,'u$l',4).length).to.eql(6)
  expect(randomString(6,'l',4).length).to.eql(6)
  t.pass()
})