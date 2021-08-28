module.exports = (app) => {
    const stories = require('../controllers/stories.controller');

    const router = require('express').Router();

    // Create a new Tutorial
    router.post('/', stories.create);

    // // Retrieve all Tutorials
    router.get('/', stories.findAll);

    // // Retrieve all published Tutorials
    // router.get('/published', tutorials.findAllPublished);

    // // Retrieve a single Tutorial with id
    // router.get('/:id', tutorials.findOne);

    // // Update a Tutorial with id
    router.put('/:id', stories.update);

    // // Delete a Tutorial with id
    // router.delete('/:id', tutorials.delete);

    // // Create a new Tutorial
    // router.delete('/', tutorials.deleteAll);

    app.use('/api/stories', router);
};
