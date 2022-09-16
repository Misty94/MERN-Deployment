const PetController = require("../controllers/pet.controller");

module.exports = (app) => {
    app.post("/api/pet/new", PetController.createPet);
    app.get("/api/pet/all", PetController.findPets);
    app.put("/api/pet/update/:id", PetController.updatePet);
    app.get("/api/pet/:id", PetController.onePet);
    app.delete("/api/pet/delete/:id", PetController.deletePet);
}