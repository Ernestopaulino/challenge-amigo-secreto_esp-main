// Arreglo para almacenar los nombres
let amigos = [];

// Función para mostrar la lista en pantalla
function mostrarLista() {
    // 1. Obtener el elemento UL donde se mostrarán los amigos
    const lista = document.getElementById("listaAmigos");

    // 2. Limpiar lista existente
    lista.innerHTML = "";

    // 3. Iterar sobre el arreglo amigos y crear <li> por cada uno
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para agregar un nuevo amigo
function agregarAmigo() {
    // 4. Capturar el valor del campo de entrada
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // 5. Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // 6. Actualizar el arreglo
    amigos.push(nombre);

    // 7. Mostrar la lista actualizada
    mostrarLista();

    // 8. Limpiar el campo de entrada
    input.value = "";
    input.focus();
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar índice aleatorio
    const indice = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indice];

    // Mostrar el resultado en la página
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${ganador}</strong></li>`;
}

// Evento para permitir añadir amigo con Enter
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("amigo").addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            agregarAmigo();
        }
    });
});

let prueba= "";
