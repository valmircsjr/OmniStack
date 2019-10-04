/**
 * Schema para a reserva (booking)
 */

const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    aprovred: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,   // id do usuário no banco que criou
        ref: 'User'                             // referencia para qual model 
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,   // id do spot no banco que criou
        ref: 'Spot'                             // referencia para qual model 
    },
});

module.exports = mongoose.model('Booking', BookingSchema);