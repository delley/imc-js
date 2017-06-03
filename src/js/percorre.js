function percorreArray(elementos, comportamento) {
  for (var posicaoAtual = 0; posicaoAtual < elementos.length; posicaoAtual++) {
    var elemento = elementos[posicaoAtual];
    comportamento(elemento);
  }
}
