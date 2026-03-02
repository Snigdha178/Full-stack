const mongoose = require("mongoose");

const AssessmentSchema = new mongoose.Schema({
    title: String,
    maxScore: Number
});

module.exports = mongoose.model("Assessment", AssessmentSchema);
