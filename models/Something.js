const { Schema, model } = require('mongoose');

const SomethingSchema = new Schema({
    //
});



// create the Pizza model using the PizzaSchema
const Something = model('Something', SomethingSchema);

// export the Something model
module.exports = Something;