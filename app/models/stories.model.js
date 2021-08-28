module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            name: String,
            avatar: String,
            stories: [String],
        },
        { timestamps: true }
    );
    schema.method('toJSON', function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Stories = mongoose.model('stories', schema);
    return Stories;
};
