
function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();

    var hora = data.getHours();
    //var hora = 15;
    var min = data.getMinutes();
    
    if(hora >= 6 && hora <12){
        img.src = 'manha.png';
        msg.innerHTML = `Bom dia. Agora são ${hora}:${min}.`;
        document.body.style.background = '#ffc188';
    }else if(hora >= 18){
        img.src = 'noite.png';
        msg.innerHTML = `Boa noite. Agora são ${hora}:${min}.`;
        document.body.style.background = '#0a0b19';
    }else{
        img.src = 'tarde.png';
        msg.innerHTML = `Boa tarde. Agora são ${hora}:${min}.`;
        document.body.style.background = '#a7cdcd';
    }
}