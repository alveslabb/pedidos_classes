const pedidos = require("../../dados/pedidos.json")

function subotais() {
    pedidos.forEach(p => {
        p.subtotal = p.quantidade * p.preco
    })
}
const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(pedidos[pedidos.length - 1].id) + 1 //autoIncrement
    pedidos.push(dados)
    res.status(201).json(dados)
}
const listar = (req, res) => {
    subotais()
    res.json(pedidos)
}
const alterar = (req, res) => { res.json("Em construção") }
const excluir = (req, res) => { res.json("Em construção") }

module.exports = {
    criar, listar, alterar, excluir
}