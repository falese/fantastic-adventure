'use strict';

const cardsGraph = require('..');
const assert = require('assert').strict;

assert.strictEqual(cardsGraph(), 'Hello from cardsGraph');
console.info('cardsGraph tests passed');
