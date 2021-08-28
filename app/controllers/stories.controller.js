const db = require('../models');
const Stories = db.stories;

// create a stories
exports.create = (req, res) => {
    const story = new Stories({
        name: req.body.name,
        avatar: req.body.avatar,
        stories: [req.body.stories],
    });

    story
        .save(story)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while creating the Tutorial',
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name
        ? { name: { $regex: new RegExp(name), $options: 'i' } }
        : {};

    Stories.find(condition)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while retrieving tutorials.',
            });
        });
};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Stories.findById(id)
        .then((data) => {
            if (!data)
                res.status(404).send({
                    message: 'Not found Tutorial with id ' + id,
                });
            else res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Error retrieving Tutorial with id=' + id,
            });
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Stories.findByIdAndUpdate(
        id,
        {
            $push: {
                stories: req.body.stories,
            },
        },
        {
            useFindAndModify: false,
        }
    )
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`,
                });
            } else res.send({ message: 'Tutorial was updated successfully.' });
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Error updating Tutorial with id=' + id,
            });
        });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};
