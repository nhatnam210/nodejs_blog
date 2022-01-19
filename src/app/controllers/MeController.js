const Course = require('../models/Course.model');

const { multipMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/stored_Courses', {
                    courses: multipMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
