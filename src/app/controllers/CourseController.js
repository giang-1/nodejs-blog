const { mutiMongooseToObject, mongooseToObject } = require('../../ulti/mongoose')
const course = require('../models/course')
const Course = require('../models/course')


class CoursesController {
    async index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', { courses: mutiMongooseToObject(courses) })
            })
            .catch(next)
    }

    //GET /NEW:SLUG
    show(req, res, next) {
        // res.send(`giang1 +  ${req.params.slug}`);
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', { course: mongooseToObject(course) })
            })
            .catch(next)
    }
    //GET/ Courses/create
    create(req, res, next) {
        res.render('courses/create')
    }
    //POST/courses/store
    store(req, res, next) {
        const data = req.body
        data.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        const course = new Course(data)
        course.save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course: mongooseToObject(course)
            }))
            .catch(next)

    }
    //PUT /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)

    }

    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //PATCH courses/id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    handleFormAction(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next)
                break;

            default:
                break;
        }
    }
}

module.exports = new CoursesController();