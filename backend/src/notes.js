const express = require ('express');

const app = express();

// GET, POST, PUT E DELETE

// req.query = Acessar query parameters (para filtros)
app.get('/users', (req, res) => {
    return res.json({ idade: req.query.idade});
})

// requ.params = Acessar route params (para edição e deleção)
app.put('/users/:id', (req, res) => {
    return res.json({ id: req.params.id});
})

// req.body = Acessar corpo da requisição (para criação e edição)
app.use(express.json());           // utilizar o json
app.post('/users', (req, res) => {
    return res.json(req.body);
})

app.listen(3333);