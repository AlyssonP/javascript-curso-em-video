function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var horas = data.getHours()
    msg.innerHTML = `Agora são ${horas} horas.`
    if(horas >= 0 && horas < 12) {
        //bom dia
        img.src = "fotomanha.png"
        document.body.style.background = "#fed840"
    } else if(horas >= 12 && horas <= 18) {
        //boa tarde
        img.src = "fototarde.png"
        document.body.style.background = "#bc8772"
    } else {
        //boa noite
        img.src = "fotonoite.png"
        document.body.style.background = "#01052a"
    }
}
