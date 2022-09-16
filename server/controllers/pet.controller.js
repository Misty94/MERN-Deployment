const Pet = require("../models/pet.model");

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => res.json({ results: newPet }))
        .catch(err => res.status(400).json({err: err}))
}

module.exports.findPets = (req, res) => {
    Pet.find()
        .then(allPets => res.json({ results: allPets }))
        .catch(err => res.json({ message: "Something went wrong!", error: err }))
}

module.exports.onePet = (req, res) => {
    Pet.findOne({_id: req.params.id})
        .then(displayPet => res.json({ results: displayPet }))
        .catch(err => res.json({ message: "Something went wrong!", error: err }))
}

module.exports.deletePet = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
        .then(deletedPet => res.json({ results: deletedPet }))
        .catch(err => res.json({ message: "Something went wrong!", error: err }))
}

module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updatedPet => res.json({ results: updatedPet }))
        .catch(err => res.status(400).json({err: err}))
}