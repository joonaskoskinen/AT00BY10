// test/library.test.js
import test from 'node:test';
import assert from 'node:assert/strict';

import words from '../src/words.js';
import toNumber from '../src/toNumber.js';
import toFinite from '../src/toFinite.js';
import toInteger from '../src/toInteger.js';
import upperFirst from '../src/upperFirst.js';
import slice from '../src/slice.js';

test('words splits sentence into words', () => {
  assert.deepEqual(
    words('fred, barney, pebbles'),
    ['fred', 'barney', 'pebbles']
  );
});

test('words returns empty array for empty string', () => {
  assert.deepEqual(words(''), []);
});

test('words supports custom pattern', () => {
  assert.deepEqual(
    words('fred, barney, & pebbles', /[^, ]+/g),
    ['fred', 'barney', '&', 'pebbles']
  );
});

test('toNumber converts decimal string', () => {
  assert.equal(toNumber('3.2'), 3.2);
});

test('toNumber converts binary string', () => {
  assert.equal(toNumber('0b1010'), 10);
});

test('toNumber converts octal string', () => {
  assert.equal(toNumber('0o10'), 8);
});

test('toNumber trims whitespace', () => {
  assert.equal(toNumber('  42  '), 42);
});

test('toFinite converts Infinity to max finite number', () => {
  assert.equal(toFinite(Infinity), 1.7976931348623157e+308);
});

test('toInteger truncates decimal string', () => {
  assert.equal(toInteger('3.2'), 3);
});

test('toInteger converts Number.MIN_VALUE to 0', () => {
  assert.equal(toInteger(Number.MIN_VALUE), 0);
});

test('upperFirst uppercases first character', () => {
  assert.equal(upperFirst('fred'), 'Fred');
});

test('upperFirst leaves uppercase string as uppercase', () => {
  assert.equal(upperFirst('FRED'), 'FRED');
});

test('slice returns tail from start index', () => {
  assert.deepEqual(slice([1, 2, 3, 4], 2), [3, 4]);
});

test('slice supports negative start index', () => {
  assert.deepEqual(slice([1, 2, 3, 4], -2), [3, 4]);
});

test('slice returns empty array for null input', () => {
  assert.deepEqual(slice(null), []);
});
