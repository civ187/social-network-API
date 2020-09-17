const router = require('express').Router();

const {
    getAllSomething,
    getSomethingById,
    createSomething,
    updateSomething,
    deleteSomething
  } = require('../../controllers/something-controller');

// Set up GET all and POST at /api/something
router
  .route('/')
  .get(getAllSomething)
  .post(createSomething);

// Set up GET one, PUT, and DELETE at /api/somethings/:id
router
  .route('/:id')
  .get(getSomethingById)
  .put(updateSomething)
  .delete(deleteSomething);

module.exports = router;