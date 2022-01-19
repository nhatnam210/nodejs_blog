const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

//thêm khóa học
router.get('/create', courseController.create);
router.post('/store', courseController.store);

//chỉnh sửa khóa học
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);

router.get('/:slug', courseController.detail);

module.exports = router;
