let numeroSecreto = 0;
let contadorIntentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(contadorIntentos);
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `Asertaste el número en ${contadorIntentos} ${(contadorIntentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario  no acertó
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', "El número secreto es menor");
        }else{
            asignarTextoElemento('p', "El número secreto es mayor");
        }
        contadorIntentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si el número generado esta incluido en la lista
    //Si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon los números posibles');
    }else{

    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function condicionesIniciales(){
    asignarTextoElemento('h1', "Juego del número secreto");
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    //generar el número aleatorio
    numeroSecreto = generarNumeroSecreto();
    //inicializar el número de intentos
    contadorIntentos = 1;
    //deshabilitar el boton de nuevo juego
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de inicio de intervalo de números
    //generar el número aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();