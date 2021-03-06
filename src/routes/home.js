const router = require('express').Router();
const path = require('path');
const homeController = require(path.join(
    __dirname,
    '../app/controllers/HomeController',
));

router.get('/', homeController.index);

module.exports = router;
