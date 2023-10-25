function adicionarContato() {
    // Obter os valores do nome e telefone do formulário
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    // Verificar se o nome e o telefone foram preenchidos
    if (nome && telefone) {
        // Criar uma nova linha na tabela
        var tabela = document.querySelector("table");
        var newRow = tabela.insertRow(tabela.rows.length);

        // Inserir as colunas nome e telefone na nova linha
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        cell1.innerHTML = nome;
        cell2.innerHTML = telefone;

        // Limpar os campos do formulário após adicionar o contato
        document.getElementById("nome").value = "";
        document.getElementById("telefone").value = "";
    } else {
        alert("Por favor, preencha o nome e o telefone.");
    }
}