//Haz tú validación en javascript acá
console.log("teste")

/*todas as funções do botao*/
function abrir__cv() {   /*abrindo o cv clicando no botao*/
    let abrir__cv = document.querySelector('.cv__pdf')
    abrir__cv.style.display = 'block';
}

function fechando__cf() {   /*fechando o cv clicando no botao*/
    let fechando__cv = document.querySelector('.cv__pdf')
    fechando__cv.style.display = 'none';
}





/*####################*/


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







