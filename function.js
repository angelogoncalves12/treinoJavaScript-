/* function mensagem () {
    const saudacao = 'Olá caro observador!';
    console.log ('Olá, eu apareço!');
    return saudacao; 

    console.log ('e eu não apareço?')
}
// return faz com que a função pare onde está 
console.log (mensagem()); */

function mensagem (parametro){
    return parametro;
}

console.log (mensagem('Oi! Sou um parâmetro!'));
//parametros só são definidos na hora de chamar a função

function mensagem1 (parametro){
    return 'Olá, ' + parametro + "!";
}
console.log(mensagem1('Angelo'));

//funções podem receber mais de um parametro:
function mensagem2 (nome, sobrenome) {
    const saudacao = 'Olá, ' + nome + ' '+ sobrenome + '!';
    return saudacao;
}
console.log (mensagem2 ('Angelo', 'Clangs'));
// a ordem dos parametros importa!!!

//dá pra usar variáveis como parametros, ao invés de string.
function mensagem3 (nome, sobrenome) {
    const saudacao = 'Olá, '+ nome + ' '+ sobrenome + '!';
    return saudacao;
}

const nomePessoa = 'Angelo';
const sobrenomePessoa ='Clangs';

console.log (mensagem3 (nomePessoa, sobrenomePessoa));

// e isso permite utilizar variáveis de outros tipos

function mensagem4 (nome, sobrenome, idade) {
    const saudacao = 'Olá, '+ nome + ' '+ sobrenome + '!';
    const exibeIdade = 'Você tem ' + idade + ' anos.';
    return saudacao + ' ' + exibeIdade;
}


console.log (mensagem3 (nomePessoa, sobrenomePessoa, 18));
console.log (mensagem3 ('Mathias', 'Kalecinsky', 19));

/////////////////////////////////////////////////

function calculaDespesa(luz, internet) {
    const despesaTotal = luz + internet;
    return 'Esse mês, a despesa foi de: R$ ' + despesaTotal;
}

console.log(calculaDespesa (230,125));

////////////////////////////////////////////////

function mostrarFrase (frases){
    return frases;
}

console.log (mostrarFrase('Vamo que vamo!'));

//////////////////////////////////////////////

function saudacao(nome) {
    return 'Olá, ' + nome + '!';
}

console.log (saudacao('Júlia'));

///////////////////////////////////////

function clientePedido (numeroPedido){
    if (numeroPedido === 1) {
        return 'Pizza de Calabresa';
    }
    else if (numeroPedido === 2){
        return 'Pizza de Quatro Queijos';
    }
    else if (numeroPedido === 3){
        return 'Pizza de Frango com Catupiry';
    }
    else if (numeroPedido === 4){
        return 'Pizza de Brigadeiro';
    }
    else {
        return 'Número do pedido INVÁLIDO!';
    }
}
console.log (clientePedido(1));

////////////////////////////////////////

function mediaNumeros (arrayNumeros){
    let soma = 0;
    let media = 0;
    
    for (let i = 0; i < arrayNumeros.length; i++){
        soma = soma + arrayNumeros [i];
    }
    media = soma / arrayNumeros.length;
    return media;
}

console.log (mediaNumeros(arrayNumeros = [2,3,4,5]));

