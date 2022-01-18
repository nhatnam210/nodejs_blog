const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// khai báo các trương của bảng
const Course = new Schema({
    nasme: { type: String, minlength: 5, maxlength: 255 },
    description: { type: String, minlength: 5, maxlength: 600 },
    image: { type: String, minlength: 5, minlength: 255 },
    slug: { type: String },
    // videoId: { type: String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

//export model
module.exports = mongoose.model('Course', Course);
