// 1. Calcular o MDC (Máximo Divisor Comum) entre dois números
function calcularMDC(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Exemplo de uso:
console.log(calcularMDC(48, 18));