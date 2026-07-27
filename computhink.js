/*Sheila é gerente e possui senha de acesso;

Jorge é vendedor e possui acesso apenas de visualização de produtos;

A gerente da loja pode ter acesso para cadastrar produtos no sistema somente se utilizar uma senha de acesso;

Se a gerente não inserir senha de acesso, irá somente visualizar os produtos;

O vendedor só possui acesso para a visualização dos produtos;

Somente essas duas pessoas têm acesso ao sistema. */

let nome = 'Sheila';
let cargo = 'Gerente';
let senhaAdm = 'Senha!123#';

if (nome === 'Sheila' && cargo === 'Gerente') {
    console.log (nome + ' acessou no cargo de ' + cargo);
    console.log ('Acesso para a visualização de produtos liberada!');
    if (senhaAdm === 'Senha!123#') {
        console.log ('Acesso para cadastro de produtos liberada!');
    }
}
else if (nome === 'Jorge' && cargo === 'Vendas'){
    console.log (nome + ' acessou com o cargo de ' + cargo);
    console.log ('Acesso para a visualização de produtos liberada!');
}
else {
    console.log ('Acesso Negado.');
}

/* Programa recebe:
Numero do Mes
Ano correto
Relata quantos dias tem
Criar invalidez de mes (mes 13 = invalido)
Retorna frase "O mes x de xxxx tem xx dias"

nao interessa em qual ano estamos, janeiro, 
março, maio, julho, agosto, outubro e dezembro sempre tem 31. 
fevereiro = 28
e os demais 30. 
QUALQUER ANO DIVISIVEL POR 4 É BISSEXTO*/

let ano = 2026;
let dia;
let mes = 2;

if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
    console.log ("31 dias");
}
else if (mes > 12 || mes < 1) {
    console.log ("Mês Inválido");
}
else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    console.log ("30 Dias!");
}
else if (mes == 2) {
    let anoBissexto = (( ano % 4 === 0) && (ano % 100 != 0) || (ano % 400 == 0));
   
    if (anoBissexto){
    console.log ("Esse mês tem 29 dias");
    }
    else {
        console.log ("Esse mês tem 28 dias");
    }

}