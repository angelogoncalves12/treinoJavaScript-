
for (let index = 10; index >= 1; index--){
    console.log (index);
}

let listaCompras = ['Maçã', 'Gengibre', 'Miojo', 'Bolacha', 'Banana', 'Feijão', 'Pasta de Dente'];
let carrinho = [];

for (let i = 0; i < listaCompras.length; i++){
    console.log (listaCompras[i]);
    if(listaCompras[i] === 'Maçã' || listaCompras[i] === 'Banana') {
            carrinho.push(listaCompras[i]);
        }
}
console.log (carrinho);

//tabuada
let numero = 7;
for (let contador = 1; contador <=9; contador++){
    console.log (numero * contador);
}

//aninhamento
const amizadesDaJuliana = ['Erickson', 'Cleyton', 'Laura', 'Claudio', 'Sheila', 'Vinicius', 'Leticia'];
const amizadesDoAdilson = ['Leticia', 'Guilherme', 'Cleyton', 'Ivan', 'Vinicius', 'Gisele'];
const amizadesEmComum = [];

for (let indexJu = 0; indexJu < amizadesDaJuliana.length; indexJu++) {
    console.log ('Amigo da Juliana ' + (indexJu+1) + ':' + amizadesDaJuliana[indexJu]);
    for (let indexAdilson = 0; indexAdilson < amizadesDoAdilson.length; indexAdilson++) {
        console.log ('Amigo do Adilson ' + (indexAdilson+1) + ':' + amizadesDoAdilson[indexAdilson]);
        if (amizadesDaJuliana[indexJu] === amizadesDoAdilson[indexAdilson]){
            amizadesEmComum.push (amizadesDoAdilson[indexAdilson]);
        }
    }   
}
console.log (amizadesEmComum); 

//////////////////////////// 

const numeros = [1,2,3,4,5];

for (let i = 0; i <= numeros.length-1; i++) {
    console.log (numeros[i]);
}
////////////////////////////////
const valoresProdutos = [10,12,8];
let somaTotal = 0;

for (let i=0; i <= valoresProdutos.length-1; i++){
    somaTotal += valoresProdutos[i];
}
console.log (somaTotal);
///////////////////////////////
const listaFrutas = ['Banana', 'Maçã', 'Mamão', 'Goiaba'];
listaFrutas.push ('Manga');

for (let i = 0; i <= listaFrutas.length-1; i++){
    console.log (listaFrutas[i]);
}
//////////////////////////////// */
const multiplicador = [3,7];

for (let i = 1; i <= 9; i++){
    console.log (multiplicador[0] + ' x ' + [i] + ' = ' + multiplicador[0] * i);
}
for (let i = 1; i <= 9; i++) {
    console.log (multiplicador[1] + ' x ' + [i] + ' = ' + multiplicador[1] * i);
}
