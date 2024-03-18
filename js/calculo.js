var botao = document.querySelector("#botao");

botao.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var span = document.querySelector('#mensagem-erro')
    
    if (form.peso.value.trim() === '' || form.peso.value.trim() === '' || form.altura.value.trim() === '') {


        span.textContent = ("Insira todos os Dados")
    } else {
        span.textContent = ("")


        var paciente = obtemInformacao(form);
        var pacienteTr = montaTr(paciente);

        var tabela = document.querySelector("#tabela-pacientes");

        tabela.appendChild(pacienteTr);
    }
});

function obtemInformacao(form) {
    var paciente = {
        nome: form.nome.value,
        peso: parseFloat(form.peso.value),
        altura: parseFloat(form.altura.value),
        gordura: parseFloat(form.gordura.value),
        imc: 0
    };

    paciente.imc = paciente.peso / Math.pow(paciente.altura, 2);
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");


    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc.toFixed(2), "info-imc");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

   
    var pesoEhValido = validaPeso(paciente.peso);
    var alturaEhValido = validaAltura(paciente.altura);

   
    if (!pesoEhValido) {
        imcTd.textContent = ("Peso inválido!");
        imcTd.classList.add("paciente-invalido")
    }
    if (!alturaEhValido) {
        imcTd.textContent = ("Peso altura!");
        imcTd.classList.add("paciente-invalido")
    }

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe)
    td.textContent = dado;

    return td;
}
function validaPeso(peso) {
    if (peso > 0 && peso <= 650) {
        return true;
    } else {
        return false;
    }
}
function validaAltura(altura) {
    if (altura > 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}