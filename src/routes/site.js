const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/siteControllers');

router.get('/:slug', siteController.show);
router.get('/', siteController.index);

module.exports = router;
