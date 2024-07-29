const mongoose = require('mongoose')

async function connet() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        })
    } catch (error) {
        console.log('fail')
    }
}


module.exports = { connet }