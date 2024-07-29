const { default: mongoose } = require("mongoose")

module.exports = {
    mutiMongooseToObject: function (courses) {
        return courses.map((course) => course.toObject())
    },
    mongooseToObject: function (courses) {
        return courses ? courses.toObject() : courses
    }
}