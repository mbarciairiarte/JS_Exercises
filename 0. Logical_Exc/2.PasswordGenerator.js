/*
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
 */

// Función para generar una contraseña aleatoria con opciones de configuración
function passwordGenerator(length = 8, capital = false, numbers = false, symbols = false) {
  // Fuente: https://www.ascii-code.com

  // Crear un array de caracteres ASCII correspondientes a letras minúsculas (97-122)
  const characters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

  // Agregar caracteres mayúsculas (si la opción capital es verdadera)
  if (capital) {
    for (let i = 65; i <= 90; i++) {
      characters.push(String.fromCharCode(i));
    }
  }

  // Agregar números (si la opción numbers es verdadera)
  if (numbers) {
    for (let i = 48; i <= 57; i++) {
      characters.push(String.fromCharCode(i));
    }
  }

  // Agregar símbolos (si la opción symbols es verdadera)
  if (symbols) {
    for (let i = 33; i <= 47; i++) {
      characters.push(String.fromCharCode(i));
    }
    for (let i = 58; i <= 64; i++) {
      characters.push(String.fromCharCode(i));
    }
    for (let i = 91; i <= 96; i++) {
      characters.push(String.fromCharCode(i));
    }
  }

  // Inicializar una cadena vacía para la contraseña
  let password = "";

  // Limitar la longitud final entre 8 y 16 caracteres
  const finalLength = length < 8 ? 8 : length > 16 ? 16 : length;

  // Generar la contraseña aleatoria
  while (password.length < finalLength) {
    // Seleccionar un carácter aleatorio del array de caracteres
    const caracterAleatorio = characters[Math.floor(Math.random() * characters.length)];
    // Agregar el carácter a la contraseña
    password += caracterAleatorio;
  }

  // Devolver la contraseña generada
  return password;
}

// Ejemplo de uso
console.log(passwordGenerator()); // Generar y mostrar una contraseña por defecto
console.log(passwordGenerator(16)); // Generar y mostrar una contraseña de longitud 16
console.log(passwordGenerator(1)); // Intento fallido de generar contraseña (fuera de rango)
console.log(passwordGenerator(22)); // Generar y mostrar una contraseña de longitud 16