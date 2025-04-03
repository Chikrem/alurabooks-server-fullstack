const { Router } = require("express")
const { getLivros, getLivro, postLivro } = require("../controladores/livro")

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/', (req, res) => {
    try {
        res.send('Você fez uma requisição do tipo PATCH')
    } catch (error) {
        res.status(500).send({ error: "Erro ao processar a requisição PATCH", details: error.message })
    }
})

router.delete('/', (req, res) => {
    try {
        res.send('Você fez uma requisição do tipo DELETE')
    } catch (error) {
        res.status(500).send({ error: "Erro ao processar a requisição DELETE", details: error.message })
    }
})

module.exports = router