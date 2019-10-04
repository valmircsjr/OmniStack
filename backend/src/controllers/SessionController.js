/**
 * Responsavel pela criaçao do usuário.
 * 
 * index, show, store, update e destroy.
 */
const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body; // buscando email dentro de body.

        // verifica se o usuário ja foi cadastrado
        let user = await User.findOne({ email }); // variavel pode ser alterada
        
        if (!user) {
            user = await User.create({ email }); // await + async aguarda uma função ser executada
        }
        return res.json(user);
    }
};