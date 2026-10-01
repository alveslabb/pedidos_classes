const pedidos = require("../../dados/pedidos.json")

function calcTotais() {
    pedidos.forEach(p => {
        p.total = p.quantidade * p.preco
    })
}

const criar = (req, res) => {
    const dados = req.body

    dados.id = Number(pedidos[pedidos.length - 1].id) + 1

    pedidos.push(dados)

    res.status(201).json(dados)
}

const listar = (req, res) => {
    calcTotais()

    res.json(pedidos)
}

const alterar = (req, res) => {
    res.json("Em construção")
}

const excluir = (req, res) => {
    res.json("Em construção")
}

module.exports = {
    criar, listar, alterar, excluir
}