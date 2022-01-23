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

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) =>
                res.render('me/trash_Courses', {
                    courses: multipMongooseToObject(courses),
                }),
            )
            .catch(next);
    }

    storedNews(req, res, next) {
        res.render('me/stored_News');
    }
}

module.exports = new MeController();
