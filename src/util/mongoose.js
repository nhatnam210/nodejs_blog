module.exports = {
    multipleMongooseToObject: (mongooses) => {
        return mongooses.map((mongoose) => mongoose.toObject());
    },
    singleMongooseToObject: (mongoose) => {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
