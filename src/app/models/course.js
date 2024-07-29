const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete')
const Schema = mongoose.Schema;


const Course = new Schema({
    name: { type: String, maxlength: 255 },
    image: { type: String, maxlength: 255 },
    description: { type: String, maxlength: 255 },
    videoId: { type: String },
    slug: { type: String, slug: 'name', unique: true }
}, {
    timestamps: true
});
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true

})
mongoose.plugin(slug)


module.exports = mongoose.model('Course', Course)