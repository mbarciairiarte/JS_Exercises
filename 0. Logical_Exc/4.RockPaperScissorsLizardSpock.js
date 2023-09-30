/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera, lagarto, spock.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "🗿" (piedra), "📄" (papel),
 *   "✂️" (tijera), "🦎" (lagarto) o "🖖" (spock).
 * - Ejemplo. Entrada: [("🗿","✂️"), ("✂️","🗿"), ("📄","✂️")]. Resultado: "Player 2".
 * - Debes buscar información sobre cómo se juega con estas 5 posibilidades.
 */

// Función principal que ejecuta el juego
function rockPaperScissorsLizardSpock() {
    // Definición de las reglas del juego
    const rules = {
      "🗿": ["✂️", "🦎"],
      "📄": ["🗿", "🖖"],
      "✂️": ["📄", "🦎"],
      "🦎": ["🖖", "📄"],
      "🖖": ["🗿", "✂️"],
    };
  
    // Solicitar la cantidad de juegos al usuario
    const numberOfGames = parseInt(prompt("Ingrese la cantidad de juegos a jugar:"));
  
    let playerOneWins = 0;
    let playerTwoWins = 0;
    let ties = 0;
  
    // Jugar la cantidad de juegos especificada
    for (let i = 0; i < numberOfGames; i++) {
      // Solicitar la jugada de Jugador 1 y Jugador 2
      const playerOneGame = prompt("Jugador 1, ingresa tu jugada (🗿/📄/✂️/🦎/🖖):");
      const playerTwoGame = prompt("Jugador 2, ingresa tu jugada (🗿/📄/✂️/🦎/🖖):");
  
      // Validar que las jugadas ingresadas sean válidas
      if (!rules[playerOneGame] || !rules[playerTwoGame]) {
        // Si una o ambas jugadas no son válidas, mostrar un mensaje de alerta y repetir el juego
        alert("Una o ambas jugadas son inválidas. Por favor, ingresa jugadas válidas.");
        i--; // Restar uno para repetir el juego
        continue;
      }
  
      let result;
  
      // Determinar el resultado de la partida
      //if (playerOneGame !== playerTwoGame): Este condicional verifica si las jugadas de Player 1 (playerOneGame) y Player 2 (playerTwoGame) son diferentes. 
      //Si son diferentes, significa que no hay empate, y se procede a determinar quién gana.
      //if (rules[playerOneGame].includes(playerTwoGame)): Aquí se consulta el objeto rules que contiene las reglas del juego.
      // rules[playerOneGame] devuelve un array que contiene las jugadas que vencen a la jugada de Player 1. La función includes(playerTwoGame) verifica si la 
      //jugada de Player 2 está en ese array de jugadas ganadoras. Si es así, significa que Player 1 ganó la partida porque su jugada vence a la de Player 2.

      //Si Player 1 gana la partida, se incrementa el contador playerOneWins en 1 y se establece la variable result con el mensaje "Player 1 gana la partida."
      //else: Si las jugadas de Player 1 y Player 2 son iguales, significa que la partida es un empate, ya que ambos jugadores eligieron la misma opción.

      //En este caso, se incrementa el contador ties en 1 (para llevar un registro de los empates) y se establece la variable result con el mensaje "Empate en la partida."
      //Si las jugadas de Player 1 y Player 2 no son iguales y no se cumple la condición de que Player 1 gana, entonces Player 2 ganó la partida. Esto se refleja en el 
      //mensaje "Player 2 gana la partida."
      if (playerOneGame !== playerTwoGame) {
        if (rules[playerOneGame].includes(playerTwoGame)) {
          playerOneWins++;
          result = "Player 1 gana la partida.";
        } else {
          playerTwoWins++;
          result = "Player 2 gana la partida.";
        }
      } else {
        ties++;
        result = "Empate en la partida.";
      }
  
      // Mostrar el resultado de la partida antes de continuar
      alert(result);
    }
  
    // Determinar quién ganó más partidas o si hubo empate
    let winner;
    if (playerOneWins > playerTwoWins) {
      winner = "Player 1";
    } else if (playerTwoWins > playerOneWins) {
      winner = "Player 2";
    } else {
      winner = "Empate";
    }
  
    // Mostrar el resultado general al final del juego
    alert(`Resultados:
    - Jugador 1 ganó ${playerOneWins} partidas.
    - Jugador 2 ganó ${playerTwoWins} partidas.
    - Hubo ${ties} empates.
    - Ganador general: ${winner}`);
  }
  
  // Llama a la función para iniciar el juego
  rockPaperScissorsLizardSpock();
  