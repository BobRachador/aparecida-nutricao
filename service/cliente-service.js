export const listaClientes = () => {
    return fetch('http://localhost:3000/pacientes')
        .then(resposta => resposta.json());
}

export const criarCliente = (nome, peso, altura, gordura) => {
    return fetch(`http://localhost:3000/pacientes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            peso: peso,
            altura: altura,
            gordura: gordura
        })
    }).then(resposta => resposta.json());
}

export const removeCliente = (id) => {
    return fetch(`http://localhost:3000/pacientes/${id}`, {
        method: 'DELETE'
    });
}

export const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/pacientes/${id}`)
        .then(resposta => resposta.json());
}

export const atualizaCliente = (id, nome, peso, altura, gordura) => {
    return fetch(`http://localhost:3000/pacientes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            peso: peso,
            altura: altura,
            gordura: gordura
        })
    }).then(resposta => resposta.json());
}

export const clienteService = {
    listaClientes,
    criarCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}
