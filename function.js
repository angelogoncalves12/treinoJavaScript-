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