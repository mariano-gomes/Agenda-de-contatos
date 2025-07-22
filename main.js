const form = document.getElementById("form-agenda");
const listaAgenda = [];


form.addEventListener("submit", function(e) {

        e.preventDefault();
        const inputNomeContato = document.getElementById("nome-contato");
        const inputNumeroContato = document.getElementById("numero-contato");
        const corpoTabela = document.querySelector("tbody");

    if(listaAgenda.includes(inputNomeContato.value)) {
        alert(`Já existe um contato com o nome ${inputNomeContato.value}!`)
    } else {
        
        listaAgenda.push(inputNomeContato.value);
        corpoTabela.innerHTML += `<tr><td>${inputNomeContato.value}</td><td>${inputNumeroContato.value}</td></tr>`;

    }

})
