const Course = require('../models/Course.model');
const Lesson = require('../models/Lesson.model');

const { multipMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // [GET] /
    home(req, res, next) {
        //Callback method
        // Course.find({}, function (err, courses) {
        //     if (!err) res.json(courses);
        //     else next(err);
        // });

        //Promise method
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipMongooseToObject(courses),
                });
            })
            // .catch((err) => next(err));
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }

    // [GET] /introduce
    introduce(req, res, next) {
        // Lesson.find({}, function (err, lesson) {
        //     if (!err) {
        //         res.json(lesson);
        //         return;
        //     }
        //     res.status(500).json({ says: 'Lỗi!!!' });
        // });

        Lesson.find({})
            .then((lesson) => {
                res.render('introduce', {
                    lesson: multipMongooseToObject(lesson),
                });
            })
            .catch(next);
        // res.render('introduce');
    }
}

module.exports = new SiteController();
