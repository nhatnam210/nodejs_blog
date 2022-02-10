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

    // [POST] /courses/store
    store(req, res, next) {
        const formData = toFormWithImage(req.body);

        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch((err) => {});
    }

    // [GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('courses/edit', {
                    course: singleMongooseToObject(course),
                }),
            )
            .catch(next);
    }

    // [PUT] /courses/:id
    update(req, res, next) {
        const formData = toFormWithImage(req.body);

        Course.findOneAndUpdate({ _id: req.params.id }, formData)
            .then(() => {
                res.redirect('/me/stored/courses');
            })
            .catch(next);
    }
    // [DELETE] /courses/:id
    destroy(req, res, next) {
        //deleted : true + //deleteAt : date
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /courses/:id/restore
    restore(req, res, next) {
        //deleted : false
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /courses/:id/kill
    permanentlyDestroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [POST] /courses/handle-form-actions
    handleFormActions(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: 'Action is invalid' });
        }
    }
}

function toFormWithImage(data) {
    const newData = { ...data };
    newData.image = `https://i.ytimg.com/vi/${newData.videoId}/hqdefault.jpg?`;
    return newData;
}

module.exports = new CourseController();
