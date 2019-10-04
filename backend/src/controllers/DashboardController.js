/**
 * Dashboard do usuário com os espaços cadastrados.
 * 
 * index, show, store, update e destroy.
 */
const Spot = require('../models/Spot');

module.exports = {
    async show(req, res) {
        const { user_id } = req.headers;
        
        const spots = await Spot.find({ user: user_id }); // o campo do bd: valor a ser encontrado.

        return res.json(spots);
    }
}