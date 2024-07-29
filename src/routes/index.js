const newRouter = require('./news');
const coursesController = require('./courses');
const siteRouter = require('./site');
const meRouter = require('./me')

function route(app) {
    app.use('/news', newRouter);
    app.use('/', siteRouter);
    app.use('/courses', coursesController)
    app.use('/me', meRouter)
}

module.exports = route;
