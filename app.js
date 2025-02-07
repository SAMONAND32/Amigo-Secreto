// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo () {
    //Evaluar el campo vacio

    //Campo vacio
    let nombre = document.getElementById('amigo').value;
    if (nombre.length == 0 || /^\s+$/.test(nombre)) {
        alert('Por favor, inserte un nombre.');
        return false;
    //Valido el usurio ingreso nombres
    } else {
        nombre = amigos.push(nombre);
    }
    limpiarCampo();
    console.log(nombre);
    console.log(amigos);
    return;
}

//Limpiar el campo de nombre cada vez que ingrese uno nuevo
function limpiarCampo() {
    let valorCampo = document.querySelector('#amigo');
    valorCampo.value = '';
}

//Cambios dia 06/02/25
