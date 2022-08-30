//Haz tú validación en javascript acá
/*var form = document.getElementById('form');
var nome = document.getElementsById('nome');
var email = document.getElementsById('email');
var assunto = document.getElementsById('assunto');
var mensagem = document.getElementsById('mensagem');
var botao = document.getElementsById('botao');*/

/*

var botao = document.querySelector("#botao");

function botaoFormulario() {
    event.preventDefault();
    console.log("Oi eu sou o botao e fui clicacdo")
}

var clicakbotao = botao.addEventListener("click",botaoFormulario);

*/
console.log("teste")


var botao = document.querySelector("#botao");
botao.addEventListener("click", function(event) {
    /*event.preventDefault();*/

    var nome = document.querySelector('#nome');
    var email = document.querySelector('#email');
    var assunto = document.querySelector('#assunto');
    var mensagem = document.querySelector('#mensagem');

    var nome = nome.value
    var email = email.value
    var assunto = assunto.value
    var mensagem = mensagem.value

    var corpoDoEmail = email.toString() + "\nNome:" + "\n\nAssunto:" + assunto.toString() + "\n\n" + mensagem.toString()

    return console.log(corpoDoEmail)
});







