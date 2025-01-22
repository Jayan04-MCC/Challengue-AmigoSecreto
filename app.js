// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let idElementoListaAmigos = 'listaAmigos';
let idElementoAmigoSorteado = 'amigoSorteado';

function agregarAmigo() {
    let name = document.getElementById('amigo').value;
    if(typeof name !== 'string' || name.trim() === ''){
        alert('Por favor, inserte un nombre.');
        console.log(name);
    }else{
    listaAmigos.push(name);
    console.log(listaAmigos);
    limpiarEntrada();
    mostrarAmigos('listaAmigos');
    }
}

function mostrarAmigos(id,NombreEscogido){
    let lista = document.getElementById(id);
    lista.innerHTML = '';
    if(!NombreEscogido){
        listaAmigos.forEach((amigo) => {
            let item = document.createElement('li');
            item.textContent = amigo;
            lista.appendChild(item);
        });
    }
    else{
        let item = document.createElement('li');
        item.textContent = NombreEscogido;
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    if(listaAmigos.length < 2){
        alert('Por favor, ingrese al menos dos amigos.');
        return;
    }
    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    console.log(amigoSorteado);
    mostrarAmigos('resultado',amigoSorteado);
    
}

function limpiarEntrada(){
    document.getElementById('amigo').value = '';
}

