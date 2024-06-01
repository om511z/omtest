const mongoose = require('mongoose')

const MenSchema = mongoose.Schema({
    productname : {
        type : String,
        required : true,
    },

    price : {
        type : String,
        required : true,
    },

    category : {
        type : String,
        required : true,
    },

    imageurl : {
        type : String,
        required : true,
    },

    companyname : {
        type : String,
        required : true,
    },

    productlink : {
        type : String,
        required : true,
    },

})

module.exports = mongoose.model('Men',MenSchema)