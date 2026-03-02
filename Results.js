const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
    studentId: String,
    assessmentId: String,
    score: Number
});

module.exports = mongoose.model("Result", ResultSchema);let percentage = (score / maxScore) * 100;
