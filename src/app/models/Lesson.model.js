const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Lesson = new Schema(
    {
        name: { type: String, default: 'hahaha' },
        demo: { type: String, maxlength: 500 },
        date: { type: Date, default: Date.now },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

mongoose.plugin(slug);
Lesson.plugin(mongoose_delete, {
    deletedAt: true,
    overrideMethods: 'all',
});

//export model
module.exports = mongoose.model('Lesson', Lesson);
