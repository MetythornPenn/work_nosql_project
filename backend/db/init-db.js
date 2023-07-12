const mongoose = require('mongoose');

//mongoose.connect('mongodb+srv://tolapheng99:0xod0dtuTHkUKfWz@cluster0.d5i3nz1.mongodb.net/blog_db')
// mongoose.connect('mongodb://0.0.0.0:27017/blog_db')
// mongoose.connect('mongodb://mongo_db_service:27017/blog_db')
mongoose.connect('mongodb://0.0.0.0:27017/project').then(() => {
    console.log("Connected to MongoDB successfully")

}).catch((error) => {
    console.log("Cannot connect to MongoDB!", error);
});

