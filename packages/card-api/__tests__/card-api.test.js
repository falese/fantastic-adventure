'use strict';

const cardApi = require('..');
const assert = require('assert').strict;

assert.strictEqual(cardApi(), 'Hello from cardApi');
console.info('cardApi tests passed');
