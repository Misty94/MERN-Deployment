const mongoose = require('mongoose');

const database = "mern_exam";

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( () => console.log(`Successfully establish a connection to: ${database}`))
    .catch( (err) => console.log("Something went wrong connecting to the database: ", err));