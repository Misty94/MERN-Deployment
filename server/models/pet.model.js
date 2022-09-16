const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pet Name is required!"],
        minLength: [3, "Pet Name must be at least 3 characters long!"],
        unique: [true, "That pet name has already been added; please choose another!"]
    },
    type: {
        type: String,
        required: [true, "Pet Type is required!"],
        minLength: [3, "Pet Type must be at least 3 characters long!"]
    },
    description: {
        type: String,
        required: [true, "Pet Description is required!"],
        minLength: [3, "Pet Description must be at least 3 characters long!"]
    },
    one: {
        type: String
    },
    two: {
        type: String
    },
    three: {
        type: String
    }
}, { timestamps: true });

PetSchema.path('name').validate( async (name) => { 
    const nameCount = await mongoose.models.Pet.countDocuments({name})
    return !nameCount
}, 'That pet name has already been added; please choose another!')

const Pet = mongoose.model("Pet", PetSchema);
module.exports = Pet;