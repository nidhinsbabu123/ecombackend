const mongoose = require('mongoose')


// const validator = require('validator')

const userSchema = new mongoose.Schema({
    name : String,

    email : {
        type : String,
        unique : true,
        require : true
    },

    password : String,
    role : String
        
},{
    timestamps : true
})

// Name of the Model & collection name of database shall be same
const shops = new mongoose.model('shops',userSchema)

// Exporting the user model -- shops

module.exports  = shops