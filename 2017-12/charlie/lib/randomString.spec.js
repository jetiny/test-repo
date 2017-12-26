import test from 'ava'
import randomString from '../lib/randomString'

test('test random string', t => {
  const r = randomString()
  const r0 = randomString(8)
  const r1 = randomString(10, '$lu', '{}')
  const r2 = randomString(12, '$lu')

  t.true(typeof r === 'string')
  t.true(r.length === 6)
  t.true(typeof r0 === 'string')
  t.true(r0.length === 8)
  t.true(typeof r1 === 'string')
  t.true(r1.length === 10)
  t.true(r2.length === 12)
})
