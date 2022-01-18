const Course = require('../models/Course.model');
const { singleMongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /courses/:slug
    showDetail(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('courses/show', {
                    course: singleMongooseToObject(course),
                }),
            )
            .catch(next);
    }
}

module.exports = new CourseController();
