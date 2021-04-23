let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Salary Model
let salarySchema = require('../models/Salary');

// CREATE Salary
router.route('/create-salary').post((req, res, next) => {
  salarySchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Salaries
router.route('/').get((req, res) => {
  salarySchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Salary
router.route('/edit-salary/:id').get((req, res) => {
  salarySchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Salary
router.route('/update-salary/:id').put((req, res, next) => {
  salarySchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Salary updated successfully !')
    }
  })
})

// Delete Salary
router.route('/delete-salary/:id').delete((req, res, next) => {
  salarySchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;