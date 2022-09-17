/* Desafío: javaScript

Nombre de Desafío: ciclos_js

Instrucciones */

// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  } else {
    return "son iguales";
  }
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if (edad > 17) {
    return "Allowed";
  } else {
    return "Not allowed";
  }
}

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico.
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  switch (status) {
    case 1:
      return "Online";
      break;
    case 2:
      return "Away";
      break;
    default:
      "Offline";
      break;
  }

  function saludo(idioma) {
    // Devuelve un saludo en tres diferentes lenguajes:
    // Si "idioma" es "aleman", devuelve "Guten Tag!"
    // Si "idioma" es "mandarin", devuelve "Ni Hao!"
    // Si "idioma" es "ingles", devuelve "Hello!"
    // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
    // Tu código:
    switch (idioma) {
      case aleman:
        return "Guten Tag!";
        break;
      case mandarin:
        return "Ni Hao!";
        break;
      case ingles:
        return "Hello";
        break;
      default:
        "Hola!";
        break;
    }
  }

  function colors(color) {
    //La función recibe un color. Devolver el string correspondiente:
    //En caso que el color recibido sea "blue", devuleve --> "This is blue"
    //En caso que el color recibido sea "red", devuleve --> "This is red"
    //En caso que el color recibido sea "green", devuleve --> "This is green"
    //En caso que el color recibido sea "orange", devuleve --> "This is orange"
    //Caso default: devuelve --> "Color not found"
    //Usar el statement Switch.

    switch (color) {
      case blue:
        return "This is blue";
        break;
      case red:
        return "This is red";
        break;
      case green:
        return "This is green";
        break;
      case orange:
        return "This is orange";
        break;
      default:
        return "Color not found";
        break;
    }
  }

  function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:

    if (numero === 10 || numero === 5) {
      return true;
    } else {
      return false;
    }
  }

  function estaEnRango(numero) {
    // Devuelve "true" si "numero" es menor que 50 y mayor que 20
    // De lo contrario, devuelve "false"
    // Tu código:

    if (numero < 50 && numero > 20) {
      return true;
    } else {
      return false;
    }
  }

  function esEntero(numero) {
    // Devuelve "true" si "numero" es un entero (int/integer)
    // Ejemplo: 0.8 -> false
    // Ejemplo: 1 -> true
    // Ejemplo: -10 -> true
    // De lo contrario, devuelve "false"
    // Pista: Puedes resolver esto usando `Math.floor`
    // Tu código:
    if (Math.floor(numero) === numero) {
      return true;
    }
    return false;
  }

  function fizzBuzz(numero) {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero
    if (numero % 5 === 0 && numero % 3 === 0) {
      return "fizzbuzz";
    }
    if (numero % 3 === 0) {
      return "fizz;";
    }
    if (numero % 5 === 0) {
      return "buzz;";
    } else {
      return numero;
    }
  }

  function operadoresLogicos(num1, num2, num3) {
    //La función recibe tres números distintos.
    //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
    //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
    //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
    //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
    if (num1 === 0 || num2 === 0 || num3 === 0) {
      return "Error";
    }
    if (num1 < 0 || num2 < 0 || num3 < 0) {
      return "Hay negatvos";
    }
    if (num1 > num2 && num1 > num3 && num1 > 0) {
      return "Número 1 es mayor y positivo";
    }
    if (num3 > num1 && num3 > num2) {
      return num3++;
    } else {
      return false;
    }
  }

  function esPrimo(numero) {
    // Devuelve "true" si "numero" es primo
    // De lo contrario devuelve "falso"
    // Pista: un número primo solo es divisible por sí mismo y por 1
    // Pista 2: Puedes resolverlo usando un bucle `for`
    // Nota: Los números 0 y 1 NO son considerados números primos
    if (numero == 0 || numero == 1) {
      return false;
    }
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
      return true;
    }
  }
}

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if (valor) {
    return true;
  } else {
    return false;
  }
}

function tablaDelSeis() {
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí
  let tabla = [];
  for (let i = 0; i <= 10; i++) {
    const result = 6 * i;
    tabla.push(result);
  }
  return tabla;
}

function tieneTresDigitos(numero) {
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if (numero < 1000 && numero > 99) {
    return true;
  } else {
    return false;
  }
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let counter = 0;
  let amplifiedNum = numero;
  do {
    amplifiedNum = amplifiedNum + 5;
    counter++;
  } while (counter < 8);
}

// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + 1;
  }
  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ");
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return true;
    }
  }
  return false;
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let numero = 0;
  for (let i = 0; i < numeros.length; i++) {
    numeros = numeros + numeros[i];
  }
  return numero;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let array = resultadosTest.length;
  let sum = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    suma = suma + resultadosTest[i];
  }
  return suma / array;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let max = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > max) {
      max = numeros[i];
    }
  }
  return max;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let producto = arguments[0];

  if (arguments.length < 1) {
    return 0;
  }
  if (arguments.length === 1) {
    return arguments[0];
  }
  for (let i = 1; i < arguments.length; i++) {
    producto *= arguments[i];
  }
  return producto;
}

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let nuevoArray = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] < 18) {
      nuevoArray.push(arreglo[i]);
    }
  }
  return nuevoArray.length;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
  if (numeroDeDia < 2 || numeroDeDia > 6) {
    return "Es fin de semana";
  }
  if (numeroDeDia > 1 || numeroDeDia < 7) {
    return "Es dia Laboral";
  }
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let num = String(n);
  if (num[0] === "9") {
    return true;
  }
  return false;
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[0 === arreglo[i]]) {
      return true;
    }
    return false;
  }
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Enero") {
      nuevoArray.push(array[i]);
    }
    if (array[i] === "Marzo") {
      nuevoArray.push(array[i]);
    }
    if (array[i] === "Noviembre") {
      nuevoArray.push(array[i]);
    }
    if (nuevoArraylength === 3) {
      return nuevoArray;
    }
    return "No se encontraron los emses pedidos";
  }
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100 && array[i] < 200) {
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let nuevoArray = [];
  let i = 0;

  do {
    numero += 2;
    i++;
    nuevoArray.push(numero);
    if (numero === i) {
      return "Se interrumpió la ejecución";
    }
  } while (i < 10);
  return nuevoArray;
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let nuevoArray = [];
  let i = 0;
  while (i < 10) {
    i++;
    if (i === 4) continue;
    numero += 2;
    nuevoArray.push(numero);
  }
  return nuevoArray;
}
