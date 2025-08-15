let listaNomes = [];

function textoVazio() {
    alert('Atenção! O texto não pode estar vazio. Por favor, insira um nome válido.');
}


function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim(); 

    if (!nome) {
        textoVazio();
        return;
    } else {
        listaNomes.push(nome);
        console.log(listaNomes);
        atualizarLista();
        limparCampo();
    }
}

function atualizarLista() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';
    for (let i = 0; i < listaNomes.length; i++) {
        const li = document.createElement('li');
        li.textContent = listaNomes[i];
        ul.appendChild(li);
    }
    
}

function limparCampo() {
    const input = document.getElementById('amigo');
    input.value = '';
}

function sortearAmigo() {
    if (listaNomes.length < 1) {
        alert('Você não inseriu nomes o suficiente!');
        return;
    } else {

        const ulLista = document.getElementById('listaAmigos');
        ulLista.innerHTML = ''; 

        const indiceSorteado = Math.floor(Math.random() * listaNomes.length);
        const nomeSorteado = listaNomes[indiceSorteado];

        const li = document.createElement('li');
        li.textContent = nomeSorteado;
        ulLista.appendChild(li);
    }
}
