// ------------- Elementos DOM ------------
let inputTareas = document.getElementById("inputTareas");
let btnAgregarTarea = document.getElementById("btnAgregarTarea");
let listaTareas = document.getElementById("listaTareas");
let contadorTareas = document.getElementById("contadorTareas");
let btnBorrarTodo = document.getElementById("btnBorrarTodo");

// ------------- Funciones ------------
function borrarTodasTareas() {
    localStorage.removeItem("tareas");
    listaTareas.innerHTML = "";
    actualizarContador();
}

function actualizarContador() {
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

    contadorTareas.textContent = `Tareas totales: ${tareas.length}`;
}

function cargarTareas() {
    let tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];

    listaTareas.innerHTML = "";

    tareasGuardadas.forEach(tarea => {
        let li = document.createElement("li");
        li.textContent = tarea;
        listaTareas.appendChild(li);
    });

    actualizarContador();
}

function agregarTarea() {
    let textoTarea = inputTareas.value.trim();

    if (textoTarea) {
        let nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = textoTarea;
        listaTareas.appendChild(nuevaTarea);

        let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
        tareas.push(textoTarea);
        localStorage.setItem("tareas", JSON.stringify(tareas));

        inputTareas.value = "";
        inputTareas.focus();
    }

    actualizarContador();
}

// ------------- Eventos ------------
btnAgregarTarea.addEventListener("click", agregarTarea);

inputTareas.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarTarea();
    }  
});

// Al cargar la página... Se cargan las tareas guardadas.
window.addEventListener("load", cargarTareas);

btnBorrarTodo.addEventListener("click", borrarTodasTareas);