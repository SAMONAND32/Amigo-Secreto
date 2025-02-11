// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo () {
    //Evaluar el campo vacio

    //Campo vacio
    let nombre = document.getElementById('amigo').value;
    if (nombre.length == 0 || /^\s+$/.test(nombre)) {
        alert('Por favor, inserte un nombre.');
        return false;
    //Valido el usuario ingreso nombres
    } else {
        amigos.push(nombre);
        actualizarLista();
    }
    limpiarCampo();
    sortearAmigo();
    return;
}

//Limpiar el campo de nombre cada vez que ingrese uno nuevo
function limpiarCampo() {
    let valorCampo = document.querySelector('#amigo');
    valorCampo.value = '';
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos

    for (let amigo of amigos) {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    if(amigos.length !== 0) { 
        console.log('no está vacío')
    } 
}

function seleccionIndiceAleatorio() {
    let amigoAleatorio = Math.floor(Math.random()*amigos.length);
}
