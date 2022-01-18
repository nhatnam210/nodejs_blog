const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);
router.get('/introduce', siteController.introduce);
router.get('/', siteController.home);

module.exports = router;
