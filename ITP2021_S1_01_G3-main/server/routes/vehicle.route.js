let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Salary Model
let vehicleSchema= require('../Models/Vehicle');

// CREATE Salary
router.route('/create-vehicle').post((req, res, next) => {
  vehicleSchema.create(req.body, (error, data) => {
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
  vehicleSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Salary
router.route('/edit-vehicle/:id').get((req, res) => {
  vehicleSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Salary
router.route('/update-vehicle/:id').put((req, res, next) => {
  vehicleSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Vehicle updated successfully !')
    }
  })
})

// Delete Salary
router.route('/delete-vehicle/:id').delete((req, res, next) => {
  vehicleSchema.findByIdAndRemove(req.params.id, (error, data) => {
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