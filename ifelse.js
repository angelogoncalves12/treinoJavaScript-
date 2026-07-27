// Tema: Estrutura de decisão (if/else)

const fruta = 'maca';

if (fruta === 'banana') {
    console.log ('vitamina de banana');
}
else if (fruta === 'maca') {
    console.log ('agradou o ryuk');
}
else {
    console.log ('Suco de ' + fruta + ' saindo');
}

// nota conceito 

const notaEstudante = 7.5;

if (notaEstudante >= 8) {
    console.log ("NOTA A");
}
else if (notaEstudante >= 6 && notaEstudante < 8){
    console.log ("NOTA B");
}
else if (notaEstudante >= 4 && notaEstudante < 6) {
    console.log ("NOTA C");
}
else {
    console.log ("NOTA D");
}


// exercício do curso
function ifElseExercise() {
    let atribuirMensagem = true;
    let mensagem;
    if (atribuirMensagem === true) {
        mensagem = 'Olá, Clangs! ';
    }
    else {
        mensagem = 'Não há atribuição';
    }
    console.log (mensagem);
}
////////////////////////////////////////////

let lampada = 'ligada';
let estadoLampada;

if (lampada === 'ligada') {
  estadoLampada = 'A lâmpada está ligada!';
} 
else {
  estadoLampada = 'A lâmpada está desligada!';
}
console.log(estadoLampada);

///////////////////////////////////////////

let num = 22;
let mensagem;

if (num % 2 === 0) {
    mensagem = num + ' é par';
}
else {
    mensagem = num + ' é ímpar';
}
console.log (mensagem);

/////////////////////////////////////////

let nota1 = 8;
let nota2 = 6;
let media;
let resultado;

media = (nota1 + nota2) / 2;

if (media >= 7) {
    resultado = 'Aprovado';
} 
else {
    resultado = 'Reprovado';
}
console.log('Média: ' + media + ' - ' + resultado);

/////////////////////////////////////////

let usuario = 'tryber';
let senha = 'tr1b3';
let autenticacao;

if (usuario === 'tryber' && senha === 'tr1b3') {
    autenticacao = 'Autenticação Válida!';
}
else {
    autenticacao = 'Login e/ou senha incorretos!';
}
console.log(autenticacao);

let idadeJulia = 25;
idadeJulia = 21;
let idadeErick = 21;
let verificaIdade = '';

if (idadeJulia > idadeErick) {
    verificaIdade = 'Julia é mais velha que Erick';
}
else if (idadeJulia < idadeErick) {
    verificaIdade = 'Erick é mais velho que Julia';
}
else {
    verificaIdade = 'Julia e Erick têm a mesma idade';
}
console.log(verificaIdade);


////////////////////////////

let dadoNumero = 9;
let classe = '';
let resultado = '';

if (dadoNumero < 4) {
    classe = 'Guerreiro';
    resultado = 'Sua classe é ' + classe;
    console.log (resultado);
}
else if (dadoNumero >= 4 && dadoNumero < 8){
    classe = 'Ladino';
    resultado = 'Sua classe é ' + classe;
}
else if (dadoNumero >=8 && dadoNumero < 12) {
    classe = 'Curandeiro';
    resultado = 'Sua classe é ' + classe;
}
else if (dadoNumero >= 12 && dadoNumero < 16){
    classe = 'Arqueiro';
    resultado = 'Sua classe é ' + classe;
}
else if (dadoNumero >=16 && dadoNumero <= 20) {
    classe = 'Feiticeiro';
    resultado ='Sua classe é ' + classe;
}
else {
    resultado = 'Apenas gire resultados D20';
}
console.log (resultado);

