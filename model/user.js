const mongoose = require("mongoose")

const UserSchemma = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true
    }

})

const User = mongoose.model("User", UserSchemma);

module.exports = User;