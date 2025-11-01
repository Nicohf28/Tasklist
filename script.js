let inputTareas = document.getElementById("inputTareas");
let btnAgregarTarea = document.getElementById("btnAgregarTarea");
let listaTareas = document.getElementById("listaTareas");

function agregarTarea() {
    let textoTarea = inputTareas.value.trim();

    if (textoTarea) {
        let nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = textoTarea;

        listaTareas.appendChild(nuevaTarea);

        inputTareas.value = "";
        inputTareas.focus();
    }
}

btnAgregarTarea.addEventListener("click", agregarTarea);

inputTareas.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarTarea();
    }  
});