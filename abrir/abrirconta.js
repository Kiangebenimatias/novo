function cria() {
    var nome = document.getElementById("txtabrirnome")
    var apelido = document.getElementById("txtabrirapelido")
    var telefone = document.getElementById("txtabrirtel")
    var data = document.getElementById("txtabrirdata")
    var email = document.getElementById("txtabriremail")
    var morada = document.getElementById("txtabrirmorada")
    var palavrapasse1 = document.getElementById("txtabrirpalavrapasse1")
    var palavrapasse2 = document.getElementById("txtabrirpalavrapasse2")
    var codigo = document.getElementById("txtabrircodigo")
    if (nome.value.length == 0 || apelido.value.length == 0 || telefone.value.length == 0 || data.value.length == 0 || email.value.length == 0 || morada.value.length == 0 || palavrapasse1.value.length == 0 || palavrapasse2.value.length == 0 || codigo.value.length == 0 || nome.value.length == 0 ) {
        Swal.fire({
            title: 'Atenção!',
            text: 'Preecha bem os dados acima',
            icon: 'error',
            confirmButtonText: 'Repetir'
          })
        nome.style.background = "red"
        apelido.style.background = "red"
        telefone.style.background = "red"
        data.style.background = "red"
        email.style.background = "red"
        morada.style.background = "red"
        palavrapasse1.style.background = "red"
        palavrapasse2.style.background = "red"
        codigo.style.background = "red"
    } else if (palavrapasse1 == palavrapasse2) {
        
    } else {
        Swal.fire({
            title: 'Ben vindo a EssênciMenSager',
            text: 'A sua conta foi criada com sucesso',
            icon: 'success',
            confirmButtonText: 'Confirmar!'
          })
            window.location.href = "../index.html" 
    }
}
