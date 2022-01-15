const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// khai báo các trương của bảng
const Course = new Schema({
    name: { type: String, minlength: 5, maxlength: 255 },
    description: { type: String, minlength: 5, maxlength: 600 },
    image: { type: String, minlength: 5, minlength: 255 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
