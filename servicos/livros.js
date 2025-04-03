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

function modificaLivro(id, modificacoes) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
    
    // Converte o id para número
    const idNumerico = parseInt(id, 10);
    
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === idNumerico);
    
    if (indiceModificado === -1) {
        throw new Error(`Livro com ID ${id} não encontrado.`);
    }
    
    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes };
    livrosAtuais[indiceModificado] = conteudoMudado;
    
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais, null, 2));
    
    return livrosAtuais;
}

function deletaLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livrosFiltrados = livros.filter( livro => livro.id !== id )
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))
 }

module.exports = {
    getTodosLivros,
    getLivrosId,
    insereLivroNovo,
    modificaLivro,
    deletaLivroPorId
}