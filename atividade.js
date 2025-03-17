// 1. Calcular o MDC (Máximo Divisor Comum) entre dois números
function calcularMDC(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 2. Encontrar os índices do maior e menor valor em um array
function encontrarIndicesExtremos(array) {
    let indiceMaior = 0;
    let indiceMenor = 0;
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[indiceMaior]) {
            indiceMaior = i;
        }
        if (array[i] < array[indiceMenor]) {
            indiceMenor = i;
        }
    }
    
    return { indiceMaior, indiceMenor };
}

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