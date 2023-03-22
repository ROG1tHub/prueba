// Ejercicio 09
function cambio(){
    let dolares = 300; 
    let resultado = '';   
    let pesos =C;
    resultado = pesos / dolares ;
    document.getElementById("resultado").value = resultado.toFixed(2);
    
    }

//Ejercicio 10
function cambioDolar(){
    let dolares2 = parseInt(document.getElementById("dolares").value);
    let resultado2;
    let pesos2 = 300;
    resultado2 = pesos2 * dolares2;
    document.getElementById("resultado").value = resultado2.toFixed(2);
}
//Ejercicio 11
let numero1 = "";
function celsiusFarenheit(){
    numero1 = parseInt(document.getElementById("celsius").value);  //alt + 0176 = °
    let farenheit = numero1;
    let celsius= '';
    resultadocelsius = ((farenheit - 32) * (5/9));
    document.getElementById("resultado").value = resultadocelsius.toFixed(2);
}
//Ejercicio 12
function agregarPedido() {
    let nombre = document.getElementById('nombre').value.toUpperCase();
    let material = document.getElementById('material').value;
    let tamanioSeleccionado = obtenerTamanioSeleccionado();
    let comentarios = document.getElementById('comentario').value;

    let textoDeEnvio = `El envio a nombre de ${nombre} con caja ${tamanioSeleccionado}, de ${material} y con los comentarios ${comentarios}.`
    document.getElementById('enviarmsj').value = textoDeEnvio;

    document.getElementById('nombre').value = "";
    document.getElementById('comentario').value= "";
}

function obtenerTamanioSeleccionado() {
    let elementos = document.getElementsByName('tamanio');
    for (let elemento of elementos) {
        if (elemento.checked) {
            elemento.checked = false;
            return elemento.value;
        }
    }
}
//Ejercicio 13
let numeroAleatorio = numeroRandom();
let intentos = 3;

function AdivinaAdivinador() {
    let intento = +document.getElementById("numero").value;
    console.log(intento);
    console.log(numeroAleatorio);
    if (intento === numeroAleatorio) {
        document.getElementById("resultado").innerHTML = "¡Adivinaste el número!";
        numeroAleatorio = numeroRandom();
        intentos = 3;
    } else {
        intentos--;
        if (intentos > 0) {
            document.getElementById("resultado").innerHTML = "Incorrecto. Te quedan " + intentos + " intentos.";
        } else {
            document.getElementById("resultado").innerHTML = "Perdiste. El número era " + numeroAleatorio + ".";
            numeroAleatorio = numeroRandom();
            intentos = 3;
        }
    }
    document.getElementById("numero").value = '';
}


function numeroRandom() {
    let max = 5;
    let min = 1;

    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min);
}
//Ejercicio 14

function insertarNombre(evt) {
    evt.preventDefault(); //para eviatr recargar la web al dar click al boton
    if (nombre.value == "") {
        document.getElementById("aviso").innerHTML = "El campo nombre no puede estar vacío.";
    } else {
        let nombre = document.getElementById("nombre").value;
    
        let opcion = `<li> ${primeraLetraMayuscula(nombre)} </li>`;
        let lista = document.getElementById("lista-nombres");
        lista.innerHTML += opcion;
    
        document.getElementById("nombre").value = "";   //vaciar campo nombre.
        document.getElementById("aviso").innerHTML = ""; //borrar texto aviso.
    } 
};
function primeraLetraMayuscula(nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1);
  }