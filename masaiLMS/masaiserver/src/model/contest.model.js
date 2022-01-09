const mongoose = require('mongoose');

const contestSchema = new mongoose.Schema({
    title: { type: String, require: true },
    deadline: { type: String },
    tags: { type: String },
    time:{type:String}
})

const Contest = mongoose.model("contest", contestSchema);
module.exports = Contest;