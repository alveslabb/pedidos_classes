const clientes = require("../../dados/clientes.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(clientes[clientes.length - 1].id) + 1 //autoIncrement
    clientes.push(dados)
    res.status(201).json(dados)
}
const listar = (req, res) => {
    res.json(clientes)
}
const alterar = (req, res) => { res.json("Em construção") }
const excluir = (req, res) => { res.json("Em construção") }

module.exports = {
    criar, listar, alterar, excluir
}