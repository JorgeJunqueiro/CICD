//Teste automatizado

const test = require('node:test');
const assert = require('node:assert/strict');
const { somar } = require('./app.js');

test('deve somar dois números corretamente', () => {
  assert.equal(somar(2, 3), 5);
});