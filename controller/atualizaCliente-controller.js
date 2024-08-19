import { clienteService } from "../service/cliente-service.js"

const pegaURL = new URL(window.location)

const id = pegaURL.searchParams.get('id')

const inputNome = document.querySelector('[data-nome]')
const inputPeso = document.querySelector('[data-peso]')
const inputAltura = document.querySelector('[data-altura]')
const inputGordura = document.querySelector('[data-gordura]')

clienteService.detalhaCliente(id)
.then(dados => {
    inputNome.value = dados.nome 
    inputPeso.value = dados.peso
    inputAltura.value = dados.altura
    inputGordura.value = dados.gordura
})

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

    clienteService.atualizaCliente(id, inputNome.value, inputPeso.value, inputAltura.value, inputGordura.value)
    .then(() => {
        window.location.href = "../index.html"
    })
})