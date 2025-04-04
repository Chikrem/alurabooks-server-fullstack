const fs = require("fs")
const { getTodosLivros, getLivrosId, modificaLivro, deletaLivroPorId, insereLivroNovo } = require("../servicos/livros")

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id
        const livro = getLivrosId(id)
        res.send(livro)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body
        if(req.body.nome) {
            insereLivroNovo(livroNovo)
            res.status(201)
            res.send("Livro inserido com sucesso")
        } else {
            res.status(422)
            res.send("O campo nome é obrigatório")
        }

    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res) {
    try {
        const livros = modificaLivro(req.params.id, req.body);
        res.status(200).send(livros);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

function deleteLivro(req, res) {
    try {
        const id = parseInt(req.params.id, 10);
        deletaLivroPorId(id);
        res.status(200).send({ message: `Livro com ID ${id} foi deletado com sucesso.` });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}