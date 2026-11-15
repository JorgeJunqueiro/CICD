function somar(a, b) {
  return a + b;
}

// Permite que o ficheiro funcione tanto no navegador como no Node.js (para os testes)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { somar };
}