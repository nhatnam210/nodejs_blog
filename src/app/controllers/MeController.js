const Course = require('../models/Course.model');

const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        let courseQuery = Course.find({});

        if (req.query.hasOwnProperty('_sort')) {
            courseQuery = courseQuery.sort({
                [req.query.column]: req.query.type,
            });
        }

        // chạy 2 promise 1 lượt để hưởng đc kết quả của nhau
        Promise.all([
            courseQuery,
            Course.countDocumentsDeleted({}),
            Course.countDocuments({}),
        ])
            //destructuring javascript
            .then(([courses, deletedCount, count]) => {
                res.render('me/stored_Courses', {
                    deletedCount,
                    count,
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);

        // Course.countDocumentsDeleted({})
        //     .then((deletedCount) => {
        //         console.log(deletedCount);
        //     })
        //     .catch(() => {});

        // Course.find({})
        //     .then((courses) =>
        //         res.render('me/stored_Courses', {
        //             courses: multipleMongooseToObject(courses),
        //         })
        //     )
        //     .catch(next);
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Promise.all([Course.findDeleted({}), Course.countDocumentsDeleted({})])
            .then(([courses, deletedCount]) =>
                res.render('me/trash_Courses', {
                    deletedCount,
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }

    storedNews(req, res, next) {
        res.render('me/stored_News');
    }
}

module.exports = new MeController();
