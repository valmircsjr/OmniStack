const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
const path = require ('path');


const routes = require('./routes');

const app = express();

/* Conectando com o Mongo */
mongoose.connect('mongodb://localhost:27017/omnistack', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

/* Verificando conexão */
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Mongo Connected!');
});

// GET, POST, PUT E DELETE

// req.query = Acessar query parameters (para filtros)
// requ.params = Acessar route params (para edição e deleção)
// req.body = Acessar corpo da requisição (para criação e edição)

app.use(cors()) // protege nossa api de outras aplicações
app.use(express.json());  
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads'))); // para retronar arquivos
app.use(routes);         

app.listen(3333);   