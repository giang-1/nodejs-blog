const newRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // app.get('/', (req, res) => {
    //     res.render('home')
    // })
    app.use('/news', newRouter);
    app.use('/', siteRouter);
    // app.get('/news', (req, res) => {
    //     res.render('news')
    // })
    // app.get('/search', (req, res) => {
    //     res.render('search')
    // })
}

module.exports = route;
