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

// Exemplo de uso:
console.log(encontrarIndicesExtremos([10, 3, 5, 20, 7])); 