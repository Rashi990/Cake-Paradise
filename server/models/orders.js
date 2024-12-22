const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    orderName:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('orders', orderSchema);