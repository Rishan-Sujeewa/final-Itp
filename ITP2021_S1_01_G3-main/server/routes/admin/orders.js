const router = require('express').Router();

let adminOrders = require('../../models/order');

//View received orders by Admin
router.route('/admin/orders').get((req, res)=>{

    adminOrders.find().then((allOrders)=>{
        res.json(allOrders);
    }).catch((err)=>{
        console.log(err);
    })
})

//Assign a Vehicle
router.route('/admin/orders/deliver').post(async(req, res)=>{

    let orderId = req.body.id;

    const arrangedvehicle = req.body.vehicleID;
    try {
        const updatedOrder = await adminOrders.findOne({_id:orderId});
        updatedOrder.arrangedVehicle = arrangedvehicle;
        const updated = await updatedOrder.save();

    if(updated){
        res.json("Assigned Vehicle Successfully!");
    }
    } catch (error) {
        console.log(error);
    }

})

//delete specific Order
router.delete('/admin/orders/delete/:id', async(req, res) => {
    const id = req.params.id;
    try {
        await adminOrders.findByIdAndDelete(id);
        res.json(true);
    } catch (error) {
        res.status(400).json(error)
    }
});

module.exports = router;