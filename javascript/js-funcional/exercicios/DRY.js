// Exemplo do uso do DRY em programação.
const multiplicar = (a, b) => {
    return a * b;
  }
  
  const calcularAreaQuadrado = (lado) => {
    return multiplicar(lado, lado);
  }
  
  const calcularAreaCirculo = (raio) => {
    return multiplicar(3.14, multiplicar(raio, raio));
  }
  
  const calcularAreaRetangulo = (largura, altura) => {
    return multiplicar(largura, altura);
  }
  
/* Antes
  
  const calcularAreaQuadrado = (lado) => {
  return lado * lado;
}

const calcularAreaCirculo = (raio) => {
  return 3.14 * raio * raio;
}

const calcularAreaRetangulo = (largura, altura) => {
  return largura * altura;
}

*/