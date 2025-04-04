// Início Aula-2

const express = require("express")
const cors = require("cors")
const app = express()

const rotaLivro = require("./rotas/livro")
const rotaFavoritos = require("./rotas/favorito")

app.use(express.json())
app.use(cors({origin: '*'}))

app.use('/livros', rotaLivro)
app.use('/favoritos', rotaFavoritos)

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})