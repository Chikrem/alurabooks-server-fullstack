const fs = require("fs")

function getTodosLivros () {
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivrosId (id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livroFiltrado = livros.filter(livro => livro.id === id)[0]
    return livroFiltrado
}

function insereLivroNovo (livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaListaLivros = [...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros))
}

module.exports = {
    getTodosLivros,
    getLivrosId,
    insereLivroNovo
}