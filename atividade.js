// 3. Somar todos os múltiplos de 5 ou 7 abaixo de 1000
function somaMultiplos() {
    let soma = 0;
    for (let i = 1; i < 1000; i++) {
        if (i % 5 === 0 || i % 7 === 0) {
            soma += i;
        }
    }
    return soma;
}

// Exemplo de uso:
console.log(calcularMDC(48, 18)); 
console.log(encontrarIndicesExtremos([10, 3, 5, 20, 7])); 
console.log(somaMultiplos()); 