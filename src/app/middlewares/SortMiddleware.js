module.exports = function SortMiddleware(req, res, next) {
    //tạo 1 object xuyên suốt tồn tại trong local
    res.locals._sort = {
        enabled: false,
        type: 'default',
    };

    if (req.query.hasOwnProperty('_sort')) {
        Object.assign(res.locals._sort, {
            enabled: true,
            type: req.query.type,
            column: req.query.column,
        });
    }

    next();
};
