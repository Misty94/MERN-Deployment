const express = require('express');
const port = 8000;
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use( express.json(), express.urlencoded({ extended: true }) );
app.use(cors());

require("./config/mongoose.config")
require("./routes/pet.routes")(app)

app.listen(port, () => console.log(`Listening here: ${port}`));