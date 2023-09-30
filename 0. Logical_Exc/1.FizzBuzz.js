/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */



let fizzbuzz = ()=>{
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
      } else if (i % 3 === 0) {
        console.log("fizz");
      } else if (i % 5 === 0) {
        console.log("buzz");
      } else {
        console.log(i);
      }
    }
    }

//     Explicación:
// se crea una función

// for (let i = 1; i <= 100; i++): Esto inicia un bucle for que se ejecutará desde i = 1 hasta que i sea menor o igual a 100. i++ se utiliza para incrementar i en cada iteración.

// if (i % 3 === 0 && i % 5 === 0): Verifica si i es divisible tanto por 3 como por 5. Si es así, imprime "fizzbuzz". El operador % calcula el resto de la división.

// else if (i % 3 === 0): Entra aquí si el número no es divisible por 3 y 5, pero es divisible por 3. Imprime "fizz".

// else if (i % 5 === 0): Entra aquí si el número no es divisible ni por 3 ni por 5, pero es divisible por 5. Imprime "buzz".

// else: Si ninguno de los casos anteriores es verdadero, simplemente imprime el número i.

// Este código recorre todos los números del 1 al 100, reemplazando los múltiplos de 3 por "fizz", los múltiplos de 5 por "buzz" y los múltiplos de ambos por "fizzbuzz".