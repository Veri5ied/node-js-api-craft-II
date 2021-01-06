const mongoose = require("mongoose");

const sampleSchema = mongoose.Schema({}, { timestamps: true });

module.exports = mongoose.model("Sample", sampleSchema);