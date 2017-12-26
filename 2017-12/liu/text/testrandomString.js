import test from 'ava'
import {expect} from 'chai'
import formatDate from '../randomString.js'

test('randomString', t => {
    t.true(isFunction(randomString))
    expect(/^[a-z]\w{5}$/.test(randomString()(6, 'l'))).to.eql(true)
    expect(/^[A-Z]\w{5}$/.test(randomString()(6, 'u'))).to.eql(true)
    expect(/^[0-9]\w{5}$/.test(randomString()(6, 'd'))).to.eql(true)
    expect(randomString()(6, '$dul').length === 6).to.eql(true)
    t.pass()
})