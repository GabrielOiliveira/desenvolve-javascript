function somar(a, b) {
    let soma = a + b;
    return soma;
}

function subtrair(a, b) {
    let subtrair = a - b;
    return subtrair;
}

function multiplica(a, b) {
    let multiplica = a * b;
    return multiplica;
}

function divide(a, b) {
    let divide = a / b;
    return divide;
}

function mostraResultado(a, b) {
    console.log(`A soma entre ${a} e ${b}:`, somar(a, b));
    console.log(`A subtração entre ${a} e ${b}:`, subtrair(a, b));
    console.log(`A multiplicação entre ${a} e ${b}:`, multiplica(a, b));
    console.log(`A divisão entre ${a} e ${b}:`, divide(a, b));
}

mostraResultado(10, 5);
