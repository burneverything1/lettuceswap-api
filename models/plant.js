const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    weeksToHarvest: {
        type: Number,
        required: true
    },
    priceData: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PriceData'
    }
})

plantSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Plant', plantSchema)