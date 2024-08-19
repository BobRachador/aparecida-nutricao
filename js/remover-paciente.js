var tabelaT = document.querySelector("#tabela-paciente");

pacientes.forEach(paciente => {
    paciente.addEventListener("dblclick", function(event){

        event.target.parentNode.classList.add("fadeOut");

        setTimeout(() => {
            event.target.parentNode.remove();
        }, 500)


    })
})