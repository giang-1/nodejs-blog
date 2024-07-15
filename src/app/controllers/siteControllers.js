class SiteController {
    index(req, res) {
        res.render('home');
    }

    //GET /NEW:SLUG
    show(req, res) {
        res.send('giang1');
    }
}

module.exports = new SiteController();
