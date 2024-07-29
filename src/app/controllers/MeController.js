const { mutiMongooseToObject, mongooseToObject } = require('../../ulti/mongoose')
const Course = require('../models/course')


class MeController {
    //GET me/stored/courses
    store(req, res, next) {
        Course.find({})
            .then((course) => res.render('me/stored-courses', {
                course: mutiMongooseToObject(course)
            }))
            .catch(next)

    }
    //GET me/trash/courses
    trash(req, res, next) {
        Course.findWithDeleted({ deleted: true })
            .then((course) => res.render('me/trash-courses', {
                course: mutiMongooseToObject(course)
            }))
            .catch(next)
    }
}

module.exports = new MeController();