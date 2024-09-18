// Função para carregar queixas guardadas no localStorage
function carregarQueixas() {
    const queixasGuardadas = localStorage.getItem('queixas');
    if (queixasGuardadas) {
        const queixasArray = JSON.parse(queixasGuardadas);
        queixasArray.forEach(function(queixa) {
            adicionarQueixaNaLista(queixa);
        });
    }
}

// Função para adicionar queixa à lista visual e ao localStorage
function adicionarQueixaNaLista(queixa) {
    const li = document.createElement('li');
    li.textContent = queixa;
    document.getElementById('listaQueixas').appendChild(li);
}

// Guardar nova queixa no localStorage e na lista
document.getElementById('formQueixa').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obter o valor da queixa
    const queixa = document.getElementById('queixa').value;

    // Adicionar queixa à lista e guardar no localStorage
    if (queixa.trim() !== "") {
        adicionarQueixaNaLista(queixa);

        // Obter as queixas atuais do localStorage
        const queixasGuardadas = localStorage.getItem('queixas');
        const queixasArray = queixasGuardadas ? JSON.parse(queixasGuardadas) : [];

        // Adicionar a nova queixa ao array e guardar no localStorage
        queixasArray.push(queixa);
        localStorage.setItem('queixas', JSON.stringify(queixasArray));

        // Submeter o formulário para o Formspree
        const form = document.getElementById('formQueixa');
        form.submit();
    }

    // Limpar o campo de texto
    document.getElementById('queixa').value = "";
});

// Carregar as queixas ao abrir a página
window.onload = carregarQueixas;
