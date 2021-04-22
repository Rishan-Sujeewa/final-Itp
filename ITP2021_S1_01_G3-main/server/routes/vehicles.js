 const router= require("express").Router();
const { response } = require("express");
 let vehicle = require("../models/vehicle");

router.route("/add").post((req,res)=>{
    console.log("data recieved")

    const vehicleId=req.body.vehicleId;
    const registrationNum=req.body.registrationNum;
    const type =req.body.type;
    const  brandName =req.body.brandName;
    const  year=req.body.year;
    const model=req.body.model;
    const  capasity=Number(req.body.capasity);
    const chassiNumber=req.body.chassiNumber;
    const engineNumber=req.body.engineNumber;
    const adminId= req.body.adminId;
    const licenseNo=req.body.licenseNo;
    const  branchId=req.body.branchId;

    const newVehicle = new vehicle({
        vehicleId,
        registrationNum,
        type,
        brandName,
        year,
        model,
        capasity,
        chassiNumber,
        engineNumber,
        adminId,
        licenseNo,
        branchId



    })

    newVehicle.save().then(()=>{
        res.json("vehicle Added")
        console.log(newVehicle);
    }).catch((err)=>{

        console.log(err);
    })

})
//retvive the data
router.route("/").get((req,res)=>{

    vehicle.find().then((vehicles)=>{
        res.json(vehicles)
    }).catch((err)=>{
        console.log(err)
    })
})

//update
router.route("/update/:vId").put(async(req,res)=>{
    let vehiId=req.params.vId;
    const{vehicleId,registrationNum,type,brandName,year,mode,capasity,chassiNumber,engineNumber,dminId,licenseNo,
        branchId} =req.body;

const updateVehicle={
    vehicleId,
    registrationNum,
    type,
    brandName,
    year,
    mode,
    capasity,
    chassiNumber,
    engineNumber,
    adminId,
    licenseNo,
    branchId

}
const update= await vehicle.findByIdAndUpdate(vehiId,updateVehicle).then(()=>{
    res.status(200).send({status:"Admin updated"})

}).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"Error with updating data",error:err.message});

})


})
//delete
router.route("/delete/:vId").delete(async(req,res)=>{
    let vehiId=req.params.vId;

    await vehicle.findByIdAndDelete(vehiId).then(()=>{

        res.status(200).send({status:"Admin deleted"});
    }).catch((err)=>{

        console.log(err.message);
        res.status(500).send({status:"Error with delete admin",error:message});
        })
})
//search for one user data

router.route("/get/:vId").get(async(req,res)=>{
    let vehiId=req.params.vId;

  const vehi=  await vehicle.findById(vehiId).then((vehicle)=>{
        res.status(200).send({status:"Admin fetched",vehicle})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status:"Erroe with get vehicle",error:err.message})
    })
})
router.route("/report").get((req,res)=>{

    vehicle.find().then((vehicles)=>{
        res.json(vehicles)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route("/report").get((req,res)=>{

    vehicle.find().then((vehicles)=>{
        res.json(vehicles)
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports=router;