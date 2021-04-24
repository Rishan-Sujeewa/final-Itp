let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Employee Model
let EmployeeSchema = require('../models/Employee');

// CREATE Employee
router.route('/create-Employee').post((req, res, next) => {
  EmployeeSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Employee
router.route('/').get((req, res) => {
  EmployeeSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Employee
router.route('/edit-Employee/:id').get((req, res) => {
  EmployeeSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Employee
router.route('/update-Employee/:id').put((req, res, next) => {
  EmployeeSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Employee updated successfully !')
    }
  })
})

// Delete Employee
router.route('/delete-Employee/:id').delete((req, res, next) => {
  EmployeeSchema.findByIdAndRemove(req.params.id, (error, data) => {
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