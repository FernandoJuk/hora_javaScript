function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var cump = window.document.getElementById('cumprimento')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 12
    

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        //manhã
        img.src = "manha250.png"
        document.body.style.background = "#e2cd9f"
        cump.innerHTML = "Bom dia"
        msg.style.color = "#C49A3D"
        
    }
    else if (hora >= 12 && hora <= 18){
        // tarde
        img.src = "tarde250.png"
        document.body.style.background = "#b9846f"
        cump.innerHTML = "Boa tarde"
        msg.style.color = "#845340"
    }
    else{
        //noite
        img.src = "noite250.png"
        document.body.style.background = "#515154"
        cump.innerHTML = "Boa Noite"
        msg.style.color = "#2e2e2f"
    }
}
