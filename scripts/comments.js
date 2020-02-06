'use strict'

const bottonAdd = document.getElementById('add-comment')
bottonAdd.addEventListener('click', add)


function add(event) {
    console.log('hola')
    const addComment = document.getElementById('ventana-comentario')

    addComment.innerHTML = `<div class="flex-end">
    <button id="hidden-comment"><img class="img-perfil" src="images/imagesMobile/Component 7-1.png" alt="simbolo de cruz"></button>
  </div>
  <input type="text" placeholder="Escribe aquí tu respuesta" style="">
  <div class="button-add-comment flex-end">
    <button id='send-comment' > Añadir comentario </button>
    <img src="images/imagesDesktop/arrow blue.png" alt="flecha azul">
  </div>`
    quit()
    send()
}


function quit() {
    const bottonHidden = document.getElementById('hidden-comment')
    bottonHidden.addEventListener('click', hidden)
}

function send() {
    const bottonHidden = document.getElementById('send-comment')
    bottonHidden.addEventListener('click', hidden)
}


function hidden(event) {
    console.log('hola')
    const hiddenBotom = document.getElementById('ventana-comentario')
    hiddenBotom.innerHTML = ``
}





