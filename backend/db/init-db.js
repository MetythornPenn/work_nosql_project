const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/project').then(() => {
    console.log("Connected to MongoDB successfully")
}).catch((error) => {
    console.log("Cannot connect to MongoDB!", error);
});

