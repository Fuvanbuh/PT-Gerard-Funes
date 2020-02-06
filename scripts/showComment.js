'use strict'


const bottonHidden = document.getElementById('hidden-comment')
console.log(bottonHidden)
bottonHidden.addEventListener('click', hidden)


function hidden(event) {
    console.log('hola')
    const hiddenBotom = document.getElementById('ventana-comentario')

    hiddenBotom.innerHTML = ``
}