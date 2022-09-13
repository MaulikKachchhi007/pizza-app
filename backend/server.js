const mongoose = require('mongoose');
const env = require('dotenv');
const app = require('./app');   
env.config()
const db = process.env.DATABASE_URL;
const port = process.env.PORT || 3020;


mongoose.connect(db, {
    // live database
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
}).then(con => {
    console.log("Database connection established successfully");
});


app.listen(port, () => {
    console.log('Port is listening on port ' + port);
})