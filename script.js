// Funcionalidade para submeter queixa
document.getElementById('formQueixa').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obter o valor da queixa
    const queixa = document.getElementById('queixa').value;

    // Adicionar queixa à lista
    if (queixa.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = queixa;
        document.getElementById('listaQueixas').appendChild(li);
    }

    // Limpar o campo de texto
    document.getElementById('queixa').value = "";
});
