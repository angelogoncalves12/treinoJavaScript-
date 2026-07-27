/* treino de operadores logicos 

// and &&
let sol = false;
let fimDeSemana = true;
let vaiAPraia;

sol = true; 
vaiAPraia = sol && fimDeSemana;
console.log ("hoje eu vou pra praia: " + vaiAPraia);

// or ||
let gasolina = true;
let dinheiro = false;

gasolina = false; 
let viagem = gasolina || dinheiro;
console.log ("vou viajar: " + viagem);

// not !
let carroQuebrado = true;
let carroConsertado;
carroQuebrado = false;

carroConsertado = !carroQuebrado;
console.log ("O carro está consertado: " + carroConsertado);
vaiAPraia = !carroQuebrado;
console.log ("vou pra praia: " + vaiAPraia);

true && true; // true
true || false; // true
false && true; // false
false || false; // false
true && !false; // true */


// exercícios do curso
let numero = 30;
let resultado = numero >= 20 && numero <= 50 && numero % 2 === 0;
console.log("O número está entre 20 e 50 e é par: " + resultado);

let local = 'praia';
let emocao = local === 'praia' || local === 'cinema';
console.log("Estou feliz: " + emocao);

///////////////////////////////////////////////////////////////

let temOxigenioNoEspaco = true; 
let aTerrraEPequena = true;

temOxigenioNoEspaco = !temOxigenioNoEspaco;
aTerrraEPequena = !aTerrraEPequena;
console.log("Tem oxigênio no espaço: " + temOxigenioNoEspaco);
console.log("A Terra é pequena: " + aTerrraEPequena);

////////////////////////////////////////////////////////////////

let login = 'joabCassimiro';
let senha = '12345678';
let verificaCredenciais = login === 'joabCassimiro' && senha === '12345678';
console.log("Credenciais válidas: " + verificaCredenciais);

///////////////////////////////////////////////////////////////

let gostoPorPraia = false; 
gostoPorPraia = !gostoPorPraia;
console.log("Gosto de praia: " + gostoPorPraia);