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

/**
 * Instalação de depenencias: yarn add <depedencia>
 * Inicialização da apicação em dev: yarn dev (ajeitar o script no package.json)
 * Criar frontend: yarn create react-app frontend
 * Backend - proteger a api do backend: yarn add axios
 * Para criar as rotas do front: yarn add react-router-dom
 * 
 * Mobile:
 *  - npm install -g expo-cli
 */