// Tema: Operadores aritméticos 
let ideia = 2 ** 2;
console.log(ideia);

if (ideia % 2 === 0) {
    console.log('é par');
}
else {
    console.log ('é impar');
}

let novaIdeia = 9 % 2;
console.log(novaIdeia);

let hello = 'Hello';
hello = hello + ' World'; // ou hello + '' + "World" pra dar espaço
console.log(hello);

let somaBool = true + true;
console.log(somaBool);

let primeiroNumero = 178;
let segundoNumero = 93; 
let resultadoSoma = primeiroNumero + segundoNumero;
console.log (resultadoSoma);

primeiroNumero = 133;
segundoNumero = 87; 
let resultadoSubtracao = primeiroNumero - segundoNumero; 
console.log (resultadoSubtracao);

let dividendo = 192;
let divisor = 12;
let resultadoDivisao = dividendo / divisor; 
console.log (resultadoDivisao);

let multiplicador = 133;
let multiplicando = 13;
let resultadoMultiplicacao = multiplicador * multiplicando;
console.log (resultadoMultiplicacao);

let base = 2;
let expoente = 10;
let eapotencia = base ** expoente;
console.log (eapotencia);

dividendo = 11;
divisor = 3;
restoDivisao = dividendo % divisor;
console.log (restoDivisao);