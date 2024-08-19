import { clienteService, criarCliente } from "../service/cliente-service.js"

const formulario = document.querySelector('#form-adiciona')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nome = evento.target.querySelector('[data-nome]').value
    const peso = evento.target.querySelector('[data-peso]').value
    const altura = evento.target.querySelector('[data-altura]').value
    const gordura = evento.target.querySelector('[data-gordura]').value

    clienteService.criarCliente(nome, peso, altura, gordura).then(() => {
        window.location.href = '../index.html'
    })
})