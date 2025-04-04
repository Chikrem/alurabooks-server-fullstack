const fs = require("fs");
const { getTodosFavoritos, insereFavorito, deletaFavoritoPorId } = require("../servicos/favoritos");

function getFavoritos(req, res) {
  try {
    const livros = getTodosFavoritos();
    res.send(livros);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postFavorito(req, res) {
  try {
    const id = parseInt(req.params.id, 10);
    insereFavorito(id);
    res.status(201);
    res.send("Livro inserido com sucesso");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteFavorito(req, res) {
    try {
        const id = parseInt(req.params.id, 10);
        deletaFavoritoPorId(id);
        res.status(200).send({ message: `Livro com ID ${id} foi desfavoritado com sucesso.` });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

module.exports = {
  getFavoritos,
  postFavorito,
  deleteFavorito
};
