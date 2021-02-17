const mongoose = require('mongoose');

const dbConnection = async () => {

    try {

        await mongoose.connect(process.env.DBCONN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('DB connected!')
        
    } catch (error) {
        console.log(error);
        throw new Error('No se inicializó la DB!')
    }


}

module.exports = {
    dbConnection
}