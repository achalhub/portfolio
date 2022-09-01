//Haz tú validación en javascript acá
console.log("teste")

/*Abrindo popup do Curriculo*/
function abrir__cv() {
    let abrir__cv = document.querySelector('.cv__pdf')
    abrir__cv.style.display = 'block';


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







