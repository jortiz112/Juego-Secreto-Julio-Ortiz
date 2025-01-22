/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let maximosIntentos = 3;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//console.log(numeroSecreto);

function verificarIntento() {
    //alert('Click desde el botón');
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    //console.log(numeroSecreto);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('P',`Acertaste el número en ${intentos} ${intentos == 1 ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.querySelector('#intentar').setAttribute('disabled', 'true');
    } else {
        // El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        
        // limitando el número de intentos
        if (intentos > maximosIntentos) {
            asignarTextoElemento('p', `Llegaste al número máximo de ${maximosIntentos} intentos`);
            //habilito botón de nuevo juego
            document.getElementById('reiniciar').removeAttribute('disabled');
            //deshabilito botón intentar
            document.querySelector('#intentar').setAttribute('disabled', 'true');

        }
        limpiarCaja();            
    }
    return;
}

function limpiarCaja() {
    /*let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';*/
    document.querySelector('#valorUsuario').value = '';

}

function generarNumeroSecreto() {
    /*return Math.floor(Math.random()*10)+1;*/
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        //Si el número generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();        
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
} 

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();

    //Indicar mensaje de intervalos de números
    //Generar el número aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //habilitar el botón de intentar que fue deshabilitado al llegar al número máximo de intentos
    document.getElementById('intentar').removeAttribute('disabled');
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    

}
condicionesIniciales();


