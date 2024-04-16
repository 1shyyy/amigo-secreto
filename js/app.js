let listaNomes = [];
let i = 0;

function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo').value;
    listaSite(nomeAmigo);
    document.getElementById('nome-amigo').value = '';
}

function listaSite(nome){
    let listaAmigos = document.getElementById('lista-amigos');
    listaNomes.push(nome);
    if(listaAmigos.textContent == ''){
        listaAmigos.textContent = (listaNomes[listaNomes.length-1]);
    }else{
        listaAmigos.textContent = listaAmigos.textContent + ', ' + (listaNomes[listaNomes.length-1]);
    }
}


function sortear(){
    let sorteio = document.getElementById('lista-sorteio');
    embaralha(listaNomes);
    for(i = 0; i < listaNomes.length; i++){
        if(i == listaNomes.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + `${listaNomes[i]} --> ${listaNomes[0]}`;
        }else{
            sorteio.innerHTML = sorteio.innerHTML + `${listaNomes[i]} --> ${listaNomes[i+1]} <br>`;
        }
    }
}


function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {
        
        const indiceAleatorio = Math.floor(Math.random() * indice);
        
        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function reiniciar(){
    listaNomes = [];
    i = 0;
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}