const { mutiMongooseToObject } = require('../../ulti/mongoose')
const Course = require('../models/course')


class SiteController {
    async index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', { courses: mutiMongooseToObject(courses) })
            })
            .catch(next)
    }

    //GET /NEW:SLUG
    show(req, res) {
        res.send('giang1');
    }
}

module.exports = new SiteController();
