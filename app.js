// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];


function agregarAmigo() {
    let name = document.getElementById('amigo').value;
    if(typeof name !== 'string' || name.trim() === ''){
        alert('El nombre no es valido');
        console.log(name);
    }else{
    listaAmigos.push(name);
    console.log(listaAmigos);
    }
}
