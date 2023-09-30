let container = document.querySelector(".container");
let gridButton = document.getElementById("submit-grid");
let clearGridButton = document.getElementById("clear-grid");
let gridWidth = document.getElementById("width-range");
let gridHeight = document.getElementById("height-range");
let colorButton = document.getElementById("color-input");
let eraseBtn = document.getElementById("erase-btn");
let paintBtn = document.getElementById("paint-btn");
let widthValue = document.getElementById("width-value");
let heightValue = document.getElementById("height-value");

// Define un objeto "events" que contiene tipos de eventos para mouse y touch

let events = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup"
    },
    touch: {
        down: "touchstart",
        mobe: "touchmove",
        up: "touchend",
    },
};

// Variable para almacenar el tipo de dispositivo (mouse o touch)

let deviceType = "";

// Variables de estado

let draw = false;
let erase = false;

// Función para detectar si el dispositivo es táctil o no

const isTouchDevice = () => {
    try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (e) {
        deviceType = "mouse";
        return false;
    }
};

// Llama a la función para determinar el tipo de dispositivo

isTouchDevice();

// Agrega un evento de clic al botón "gridButton"

gridButton.addEventListener("click", () => {

    // Limpia el contenido del contenedor
    container.innerHTML = "";
    let count = 0;

    // Crea una cuadrícula de elementos div basada en el ancho y alto seleccionados

    for (let i = 0; i < gridHeight.value; i++) {
        count += 2;
        let div = document.createElement("div");
        div.classList.add("gridRow");

        for (let j = 0; j < gridWidth.value; j++) {
            count += 2;
            let col = document.createElement("div");
            col.classList.add("gridCol");
            col.setAttribute("id", `gridCol${count}`);
            col.addEventListener(events[deviceType].down, () => {
                draw = true;
                if (erase) {
                    col.style.backgroundColor = "transparent";
                } else {
                    col.style.backgroundColor = colorButton.value;
                }
            });

            // Agrega oyentes de eventos para el dispositivo actual (mouse o touch)

            col.addEventListener(events[deviceType].move, (e) => {

                // Obtiene el elemento en el que se encuentra el cursor/touch y llama a la función "checker"
                let elementId = document.elementFromPoint(
                    !isTouchDevice() ? e.clientX : e.touches[0].clientX,
                    !isTouchDevice() ? e.clientY : e.touches[0].clientY,
                ).id;
                checker(elementId);
            });

            col.addEventListener(events[deviceType].up, () => {
                draw = false;
            });

            div.appendChild(col);

        }

        container.appendChild(div);

    }

});

// Función para verificar si se debe dibujar o borrar al mover el mouse/touch

function checker(elementId) {
    let gridColumns = document.querySelectorAll(".gridCol");
    gridColumns.forEach((element) => {
        if (elementId == element.id) {
            if (draw && !erase) {
                element.style.backgroundColor = colorButton.value;
            } else if (draw && erase) {
                element.style.backgroundColor = "transparent";
            }
        }
    });
}

// Agrega eventos de clic a los botones "clearGridButton", "eraseBtn" y "paintBtn"


clearGridButton.addEventListener("click", () => {
    container.innerHTML = "";
});

eraseBtn.addEventListener("click", () => {
    erase = true;
});

paintBtn.addEventListener("click", () => {
    erase = false;
});

gridWidth.addEventListener("input", () => {
    widthValue.innerHTML = gridWidth.value < 9 ? `0${gridWidth.value}` : gridWidth.value;
});

gridHeight.addEventListener("input", () => {
    heightValue.innerHTML = gridHeight.value < 9 ? `0${gridHeight.value}` : gridHeight.value;
});

// Ejecuta esta función cuando se carga la página

window.onload = () => {
    gridHeight.value = 0;
    gridWidth.value = 0;
};

