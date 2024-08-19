var botaoBuscarPacientes = document.querySelector("#buscar-pacientes");

botaoBuscarPacientes.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/pacientes");

    xhr.addEventListener("load", function () {
        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            alert("Erro ao buscar pacientes. Status da requisição: " + xhr.status);
        }
    });

    xhr.send();
});

