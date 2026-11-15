const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { somar } = require('./app.js');

test('lógica: deve somar dois números corretamente', () => {
  assert.equal(somar(2, 3), 5);
});

test('integração: index.html deve importar app.js e ter o elemento resultado', () => {
  const html = fs.readFileSync('./index.html', 'utf8');
  assert.match(html, /src="app\.js"/);
  assert.match(html, /id="resultado"/);
});
