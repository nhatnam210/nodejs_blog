const Course = require('../models/Course.model');
const { singleMongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /courses/:slug
    detail(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('courses/detail', {
                    course: singleMongooseToObject(course),
                }),
            )
            .catch(next);
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [GET] /courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${formData.videoId}/hqdefault.jpg?`;

        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((err) => {});
    }
}

module.exports = new CourseController();
