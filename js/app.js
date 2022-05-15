

const button = document.querySelector('#form');
cargarEventListener();

function cargarEventListener(){
    button.addEventListener('click', validarCorreo);
}

function validarCorreo(e){
    e.preventDefault();

    const input = document.querySelector('#hero-input');
    const notificacion = document.createElement('p')
    notificacion.innerHTML ="<p id='notificacion' class='email'>Please check your email</p>"

    if(!validarCorreoExp(input.value)){
        //Correo incorrecto, aplicar estilos.
        input.classList.add('no-valido')
        document.querySelector('.hero__info').insertBefore(notificacion, button)

    }else{
        input.classList.remove('no-valido')
        window.location.href = '#'
        document.querySelector('#notificacion').remove()
    }
}

function validarCorreoExp(correo){
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    if(emailRegex.test(correo)){
        return true
    }
    return false
}