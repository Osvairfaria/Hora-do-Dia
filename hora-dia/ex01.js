
function carregar(){
let msg = window.document.getElementById('msg')
let fotos = window.document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()
// let hora = 22;

msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {
    // Bom dia
    fotos.src = 'manha.jpg'
    document.body.style.background = '#57adeb'
    msg.innerHTML = `Agora são ${hora} horas, Bom dia!`
} else if (hora >= 12 && hora < 18) {
    // Boa tarde
    fotos.src = 'tarde.jpg'
    document.body.style.background = '#f3d984'
    msg.innerHTML = `Agora são ${hora} horas, Boa tarde!`
} else {
    // Boa noite
    fotos.src = 'noite.jpg'
    document.body.style.background = '#000b19'
    msg.innerHTML = `Agora são ${hora} horas, Boa Noite!`
}

}