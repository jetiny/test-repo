import test from 'ava';
import {expect} from 'chai'
import randomString from '../lib/randomString';

test('randomString', t => {
  expect(randomString()).to.be.a('string')
  t.pass()
}) 