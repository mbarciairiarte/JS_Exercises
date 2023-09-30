/*
 * Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
 * El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
 * gane cada punto del juego.
 * 
 * - Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
 * - Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
 *   15 - Love
 *   30 - Love
 *   30 - 15
 *   30 - 30
 *   40 - 30
 *   Deuce
 *   Ventaja P1
 *   Ha ganado el P1
 * - Si quieres, puedes controlar errores en la entrada de datos.   
 * - Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.   
 */

const Player = {
    P1: 1,
    P2: 2,
};

//Esta función, obtenerResultado, toma las puntuaciones de ambos jugadores (puntuacionP1 y puntuacionP2) como argumentos y calcula el resultado 
//del juego de tenis en función de estas puntuaciones. Utiliza un array llamado puntuaciones para representar las puntuaciones correspondientes a 
//"Love", "15", "30" y "40". Luego, determina si el juego está en "Deuce", "Ventaja P1", "Ventaja P2", o si uno de los jugadores ha ganado el juego.

function obtenerResultado(puntuacionP1, puntuacionP2) {
    const puntuaciones = ["Love", "15", "30", "40"];

    if (puntuacionP1 >= 3 && puntuacionP2 >= 3) {
        if (puntuacionP1 === puntuacionP2) {
            return "Deuce";
        } else if (Math.abs(puntuacionP1 - puntuacionP2) === 1) {
            return `Ventaja ${puntuacionP1 > puntuacionP2 ? "P1" : "P2"}`;
        } else {
            return `Ha ganado el ${puntuacionP1 > puntuacionP2 ? "P1" : "P2"}`;
        }
    } else {
        return `${puntuaciones[puntuacionP1]} - ${puntuaciones[puntuacionP2]}`;
    }
}

//Esta función, juegoDeTenis, es la función principal que simula un juego de tenis. Declara variables para llevar un registro de la puntuación de P1 (puntuacionP1), 
//la puntuación de P2 (puntuacionP2), y para controlar si el juego ha terminado (finished) o si se ha producido un error (error). También inicializa resultado llamando 
//a la función obtenerResultado con las puntuaciones iniciales.

function juegoDeTenis(secuencia) {
    let puntuacionP1 = 0;
    let puntuacionP2 = 0;
    let finished = false;
    let error = false;
    let resultado = obtenerResultado(puntuacionP1, puntuacionP2); // Inicializar resultado

    //Este es un bucle for que recorre la secuencia de puntos proporcionada como entrada. En cada iteración, se toma un punto de la secuencia (punto) y se actualizan las 
    //puntuaciones de P1 y P2 en función del punto. Luego, se llama a obtenerResultado para determinar el resultado actual del juego. El bucle continúa hasta que se haya 
    //recorrido toda la secuencia de puntos o se haya determinado un resultado final.

    for (let i = 0; i < secuencia.length; i++) {
        const punto = secuencia[i];

        if (punto === Player.P1) {
            puntuacionP1++;
        } else if (punto === Player.P2) {
            puntuacionP2++;
        } else {
            console.error("Entrada no válida: Use solo 'P1' o 'P2'.");
            return;
        }

        resultado = obtenerResultado(puntuacionP1, puntuacionP2);

        if (resultado === `Ha ganado el P1` || resultado === `Ha ganado el P2`) {
            finished = true;
            break;
        }

        console.log(resultado);
    }

    console.log(error || !finished ? "Los puntos jugados no son correctos" : resultado);
}

const secuencia1 = [Player.P1, Player.P1, Player.P2, Player.P2, Player.P1, Player.P2, Player.P1, Player.P1];
const secuencia2 = [Player.P1, Player.P1, Player.P2, Player.P2, Player.P1, Player.P2, Player.P1, Player.P1, Player.P2, Player.P1];
const secuencia3 = [Player.P1, Player.P1, Player.P1, Player.P1, Player.P1, Player.P1];
const secuencia4 = [Player.P1, Player.P1];

juegoDeTenis(secuencia1);
juegoDeTenis(secuencia2);
juegoDeTenis(secuencia3);
juegoDeTenis(secuencia4);