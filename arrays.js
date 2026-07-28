/* 
const alunosTurma1 = ['Fábio', 'Cristina', 'Jéssica'];
const alunosTurma2 = ['João', 'Diogo'];
const alunoEscolhido = alunosTurma1 [1];
console.log (alunosTurma2);


// formas de alterar um array
alunosTurma2[1] = 'Angelo';
console.log (alunosTurma2.push ('Pedro'));

//amostragem do código pós alterado
console.log (alunosTurma1);
console.log (alunosTurma2);
console.log (alunoEscolhido);

//mas como saber o tamanho de uma array grande?
const quantidadeTurma2 = alunosTurma2.length;
console.log (quantidadeTurma2);

//e se alterar com push?
alunosTurma2.push('Maria');
console.log (alunosTurma2);
console.log (alunosTurma2.length);

//exemplo novo:
const convidados = ['Sheila', 'Cleyton', 'Leticia', 'Gisele', 'Vinicius', 'Ivan', 'Laura', 'Guilherme', 'Erickson', 'Claudio', 'Adilson', 'Juliana', 'Evelyn'];
const ultimoConvidado = convidados[convidados.length - 1 ]; //pra acessar o array 12, no caso o 13 com o inicio 0.

console.log(ultimoConvidado); */

//exercicios:

listaDeCompras = ['Maçã', 'Bolacha', 'Banana', 'Café em Pó', 'Leite', 'Arroz'];
console.log (listaDeCompras);

const frutas = ['Abacaxi', 'Uva', 'Banana', 'Pera', 'Maçã'];
console.log (frutas[0] + ' e ' + frutas[2] + ' e ' + frutas [4]);

const convidados = ['Adilson', 'Claudio', 'Juliana', 'Vinícius'];
convidados[2] = 'Laura';
convidados.push ('Guilherme','Letícia');
console.log (convidados);

let sabores = ['Chocolate', 'Morango', 'Açaí', 'Creme', 'Flocos'];
let coberturas = ['Chocolate', 'Morango', 'Doce de Leite'];
console.log ('Quantidade de sabores: ' + sabores.length);
console.log ('Quantidade de Coberturas: ' + coberturas.length);

let lista = [1, 2, 3, 4, 5];
let inverter = true;
let listaInvertida = [];
inverter = false;

if (inverter === true) {
    listaInvertida = [5, 4, 3, 2, 1];
    console.log (listaInvertida);
}
else {
    console.log (lista);
}
