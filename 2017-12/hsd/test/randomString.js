import {isFunction} from 'sav-util'
import test from 'ava'
import {expect} from 'chai'
import randomString from '../src/randomString.js'

test('randomString', ava => {
 ava.true(isFunction(randomString))
 expect(/^[a-zA-Z0-9]\w{5}$/.test(randomString())).to.eql(true)
 expect(/^[a-zA-Z0-9]\w{9}$/.test(randomString(10))).to.eql(true)
 expect(randomString(1, '$').length).to.eql(1)
 expect('`!@#$%^&*()-+=_[]{},./<>?;:"|\\\''.indexOf(randomString(1, '$')) >= 0).to.eql(true)
 expect(/^[a-z]\w{5}$/.test(randomString(6, 'l'))).to.eql(true)
 expect(/^[A-Z]\w{5}$/.test(randomString(6, 'u'))).to.eql(true)
 expect(/^[0-9]\w{5}$/.test(randomString(6, 'd'))).to.eql(true)
 expect(/^[a-z0-9]\w{5}$/.test(randomString(6, 'ld'))).to.eql(true)
 expect(randomString(6, '$dul').length === 6).to.eql(true)
 expect(randomString(3, 'd', '0123456789').indexOf('1') >= 0).to.eql(true)
 ava.pass()
})
