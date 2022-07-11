

 function carregar(){
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20

    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        msg.innerHTML += `<p>Bom Dia!</p>`
        img.src = 'img/manha.jpg'
        document.body.style.background = 'linear-gradient(#5081db, #040e18)'
    } else if (hora <= 18){
        msg.innerHTML += `<p>Boa Tarde!</p>`
        img.src = 'img/tarde.jpg'
        document.body.style.background = 'linear-gradient(#bc5b41, #220803)'
    } else{
        msg.innerHTML += `<p>Boa Noite!</p>`
        img.src = 'img/noite.jpg'
        document.body.style.background = 'linear-gradient(#061a21, #752d24)'
    }
 }