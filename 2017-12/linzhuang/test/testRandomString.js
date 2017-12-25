
import test from 'ava'
import {expect} from 'chai'
import randomString from '../src/randomString.js'

test('randomString', t => {
  expect(/^[a-zA-Z0-9]\w{5}$/.test(randomString()()) || randomString()().length > 5).to.eql(true)
  expect(/^[a-zA-Z0-9]\w{9}$/.test(randomString()(10)) || randomString()(10).length > 9).to.eql(true)
  expect(/^[a-zA-Z0-9]\w{9}$/.test(randomString()(10, '$')) && randomString()(10, '$').length === 10).to.eql(false)
  expect('`!@#$%^&*()-+=_[]{},./<>?;:"|\\\''.indexOf(randomString()(1, '$')) >= 0 || randomString()(1, '$').length === 0).to.eql(true)
  expect(/^[a-z]\w{5}$/.test(randomString()(6, 'l')) || randomString()(6, 'l').length > 5).to.eql(true)
  expect((/^[A-Z]\w{5}$/.test(randomString()(6, 'u'))) || randomString()(6, 'u').length > 5).to.eql(true)
  expect(/^[0-9]\w{5}$/.test(randomString()(6, 'd')) || randomString()(6, 'd').length > 5).to.eql(true)
  expect(/^[a-z0-9]\w{5}$/.test(randomString()(6, 'ld')) || randomString()(6, 'ld').length > 5).to.eql(true)
  expect(randomString()(6, '$dul').length > 5).to.eql(true)
  expect(randomString()(3, 'd', '11111111111111111').indexOf('1') >= 0).to.eql(true)
  t.pass()
})
