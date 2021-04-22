const router = require("express").Router();
let Salary = require("../models/salary");

router.route("/add").post((req,res)=>{
    const salaryID = req.body.salaryID;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const designation = req.body.designation;
    const date = req.body.date;
    const workHours = Number(req.body.workHours);
    const hourlyRate = Number(req.body.hourlyRate);
    const incentive = Number(req.body.incentive);
    const deduction = Number(req.body.deduction);
    const totalSalary = Number(req.body.totalSalary);

    const newSalary = new Salary({
        salaryID,
        fname,
        lname,
        designation,
        date,
        workHours,
        hourlyRate,
        incentive,
        deduction,
        totalSalary
    })

    newSalary.save().then(()=>{
        res.json("salary details added")
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/").get((req,res)=>{

    Salary.find().then((salaries)=>{
        res.json(salaries)
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/update/:id").put(async (req,res)=>{

    let userId = req.params.id;
    const {salaryID,fname,lname,designation,date,workHours,hourlyRate,incentive,deduction,totalSalary} = req.body;

    const updateSalary = {
        salaryID,
        fname,
        lname,
        designation,
        date,
        workHours,
        hourlyRate,
        incentive,
        deduction,
        totalSalary  
    }

    const update = await Salary.findByIdAndUpdate(userId,updateSalary).then(()=>{
        res.status(200).send({status: "salary updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "error with updating data", error: err.message})
    })
})


router.route("/delete/:id").delete(async (req,res)=>{

    let userId = req.params.id;
    
    await Salary.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "salary details deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "error with delete data", error: err.message})
    })
})

router.route("/get/:id").get(async (req,res)=>{

    let userId = req.params.id;
    const user = await Salary.findById(userId)
    .then((salary)=>{
        res.status(200).send({status: "user fetched", salary})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "error with get user", error: err.message})
    })
})




module.exports = router;