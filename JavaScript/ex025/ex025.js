var listaUsers = []

listaUsers = JSON.parse(localStorage.getItem('nr02'))
if (listaUsers == null) {
        listaUsers = []
}

exibirUser()
console.log(listaUsers)

function valicada(nome, usuario, senha, senha2) {
        if (senha != senha2) {
                alert('As senhas não estão iguais')
                return
        }

        if (nome != '' && usuario != '' && senha != '' && senha2 != '') {
                return true
        } else {
                return false
        }
}

function media() {
        var nome = document.getElementById('nome').value
        var usuario = document.getElementById('usuario').value
        var senha = document.getElementById('senha').value
        var senha2 = document.getElementById('senha2').value

        var cadastro = valicada(nome, usuario, senha, senha2)
        if (cadastro == false) {
                alert('Verifique seus dados')
                return
        }

        var usuarios = {
                nome: nome,
                usuario: usuario,
                senha: senha
        }
        listaUsers.push(usuarios)
        localStorage.setItem('nr02', JSON.stringify(listaUsers))

        exibirUser()

        var nome = document.getElementById('nome').value = ''
        var usuario = document.getElementById('usuario').value = ''
        var senha = document.getElementById('senha').value = ''
        var senha2 = document.getElementById('senha2').value = ''
}

function exibirUser() {
        document.getElementById('result').innerHTML = ''

        listaUsers.forEach((item, indice) => {
                document.getElementById('resultado').innerHTML +=
                `<div>
                <b>Nome:<br> ${item.nome} - <br>Login: <br> ${item.login}
                <img src='excluir.svg' onclick='excluirUsuario(${indice})'>`
        })

}