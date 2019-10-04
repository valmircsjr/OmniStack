/**
 * 
 * 
 * index, show, store, update e destroy.
 */
const Booking = require('../models/Booking');

module.exports = {
    async store(req, res) {
        const { user_id } = req.headers;                // busca o usuário que esta fazendo a reserva
        const { spot_id } = req.params;
        const { date } = req.body;

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        });

        // trazer as infornações dos usuários e do spot para o objeto
        await booking.populate('user').populate('spot').execPopulate();

        return res.json(booking);
    }
}