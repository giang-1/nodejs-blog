class NewController {
    //GET / news
    index(req, res) {
        res.render('news');
    }

    //GET /NEW:SLUG
    show(req, res) {
        res.send('giang1');
    }
}
module.exports = new NewController();
