const mongoose = require('mongoose');
const env = require('dotenv');
env.config();
const connectDb = async () => {
    try {
        await
            mongoose.connect(process.env.DATABASE_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });

        const db = mongoose.connection;

        db.on('connected', () => {
            console.log('database connected');
        });


        db.on('error', () => {
            console.log('database error connected');
        });
    } catch (error) {
        console.log(error.message)
    }
}
module.exports = connectDb;