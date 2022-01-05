const express = require('express');
const router = express.Router();

const contactController = require('../app/controllers/ContactController');

router.use('/fb', contactController.fb);
router.use('/', contactController.index);

module.exports = router;
