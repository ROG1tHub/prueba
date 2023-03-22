// 1. Crea un array que contenga el nombre de cinco colores escritos como strings.
let colores = ["azul","blanco","celeste","gris","negro"];
console.log(colores);

//2. Guarda en una variable el tercer elemento del array del ejercicio anterior.
let tercerElemento = colores[2];
console.log(`el tercer elemento es: ${tercerElemento}`);
/* 3. Accede desde un console.log() a la posición 0 del string de la posición 0 del array del
ejercicio 1. */
console.log(`La posición 0 del string de la posición 0 del array del
ejercicio 1 es: ${colores[0][0]}`);
/* 4. Se pide realizar un script que genere un número aleatorio entre 1 y 99. Investigue la
función Math.random(). */
function generarNumAleatorio(min, max) {
    min = Math.ceil(min); // devuelve el entero mayor o igual más próximo a un número dado.
    max = Math.floor(max); //Devuelve el máximo entero menor o igual a un número dado.
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  console.log(generarNumAleatorio(1,99));
/* 5. Rellena un array con los números del 1 al 10. Muéstralo por la consola. */
let array10 = [];
for (let vuelta = 1; vuelta <= 10; vuelta++) {
    array10.push(vuelta)
}
console.log(array10);

/* 6. Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola. */

let array10Aleatorios =[];
for (let vuelta =1; vuelta <=10; vuelta++) {
     array10Aleatorios.push(generarNumAleatorio(0,10));    
}
console.log(array10Aleatorios);
/* 7. Del array anterior, créale una copia (que no sea el mismo en sí). Mostrarlos por la
consola. */

 let copiaArray = array10Aleatorios.slice();
 console.log(copiaArray);
 console.log(copiaArray === array10Aleatorios);

/* 8. Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”.
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión
medio. Realizar la misma actividad, pero ahora almacenando los valores en un array y
luego recorriendolo para mostrar el resultado deseado del ejercicio. */

let texto = "";
let sumarTexto = "";
contador = 0 ;
function guardarMostrarCadenas(texto){
  do {
    texto = prompt(`Ingrese texto. "cancelar"para terminar.`); 
    sumarTexto = texto + "- " + sumarTexto;
    contador++; //contador
  } while (texto !="cancelar");
   
  return sumarTexto.replace("cancelar", "");
}
console.log(guardarMostrarCadenas(texto));
//////////////////////////////////////////////////////////

let palabrasArray = [];

function pedirPalabraArray() {
  const input = prompt('Ingrese palabra, para salir escriba cancelar');
  if (input === 'cancelar') {
    mostrarPalabrasArray(palabrasArray);
  } else {
    palabrasArray.push(input);
    pedirPalabraArray();
  }
}

function mostrarPalabrasArray(palabrasArray) {
  console.log(palabrasArray.join('-'));
}

pedirPalabraArray();

