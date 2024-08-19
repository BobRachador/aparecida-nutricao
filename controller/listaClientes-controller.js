import { clienteService } from "../service/cliente-service.js"

const criarNovaLinha = (id,nome,peso,altura,gordura) => {
    const linhaNovoCliente = document.createElement('tr')
    linhaNovoCliente.classList.add("paciente")

    var imc = parseInt(peso) / Math.pow(parseInt(altura), 2);
    imc.toFixed(2)

    const conteudo =`
    <td class="td info-nome" data-td>${nome}</td>
                <td>${peso}</td>
                <td>${altura}</td>
                <td>${gordura}</td>
                <td>${imc}</td>
            
                <td>
                    <ul class="tabela__botoes-controle">
                        <li class="icon"><a href="../editar.html?id=${id}" ><img src="../css/edit.png"></a></li>
                        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                    </ul>
                </td>
    `
    linhaNovoCliente.innerHTML = conteudo
    linhaNovoCliente.dataset.id = id
   
    return linhaNovoCliente
}


const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', (evento) => {
    let ehBotaDeletar = evento.target.className == 'botao-simples botao-simples--excluir'
    if(ehBotaDeletar){
        const linhaCliente = evento.target.closest('[data-id]')
        let id = linhaCliente.dataset.id
        clienteService.removeCliente(id).then(() => {
            linhaCliente.remove()
        })
    }
})

clienteService.listaClientes().then(data => {
    data.forEach(element => {
        tabela.appendChild(criarNovaLinha(element.id,element.nome, element.peso,element.altura, element.gordura))
    })
})
