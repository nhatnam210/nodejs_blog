const Course = require('../models/Course.model');

const { multipMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        // chạy 2 promise 1 lượt để hưởng đc kết quả của nhau
        Promise.all([
            Course.find({}),
            Course.countDocumentsDeleted({}),
            Course.countDocuments({}),
        ])
            //destructuring javascript
            .then(([courses, deletedCount, count]) => {
                res.render('me/stored_Courses', {
                    deletedCount,
                    count,
                    courses: multipMongooseToObject(courses),
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
        //             courses: multipMongooseToObject(courses),
        //         })
        //     )
        //     .catch(next);
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
