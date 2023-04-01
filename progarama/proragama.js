function entrar() {
    let usuario = document.querySelector("input#txtusuario")
    let chave = document.querySelector("input#passchave")
    if(usuario.value.length == 0 || chave.value.length == 0) {
        Swal.fire({
            title: 'Atenção!',
            text: 'Preecha bem todos os campos',
            icon: 'infor',
            confirmButtonText: 'Repetir'
          })
        usuario.style.background = " rgb(255, 71, 71)"
        chave.style.background = " rgb(255, 71, 71)"
    } else {
        Swal.fire({
            title: 'Ben-Vindo',
            text: 'EssênciMessanger1.0',
            icon: 'sussece',
            confirmButtonText: 'Confirma'
          })
    }
}
function entrar1() {
    let nome = document.querySelector("input#txtnome")
    let email = document.querySelector("input#emlemail")
    if (email.value.length == 0 || nome.value.length == 0){
        Swal.fire({
            title: 'Atenção!',
            text: 'Preecha bem todos os campos',
            icon: 'infor',
            confirmButtonText: 'Repetir'
          })
        nome.style.background = " rgb(255, 71, 71)"
        email.style.background = " rgb(255, 71, 71)"
    } else {
        Swal.fire({
            title: 'Ben-Vindo',
            text: 'EssênciMessanger1.0',
            icon: 'sussece',
            confirmButtonText: 'Confirma'
          })
    }
}