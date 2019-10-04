/**
 * Schema para o espaço 
 */
const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,   // id do usuário no banco que criou
        ref: 'User'                             // referencia para qual model 
    }
});

module.exports = mongoose.model('Spot', SpotSchema);