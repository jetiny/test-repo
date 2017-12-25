
import test from 'ava'
import {expect} from 'chai'
import randomString from './randomString.js'

test('randomString', t => {
  // should return the default formatDate
  expect(randomString().length).to.eql(6)
  expect(randomString("","",4).length).to.eql(0)
  t.pass()
})