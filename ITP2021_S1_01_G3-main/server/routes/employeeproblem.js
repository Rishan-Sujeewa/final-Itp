//const employee = require("../models/employee");

const router = require("express").Router();
let employeeproblem = require("../models/employeeproblem");

http://localhost.5000/employeeproblem/addC

router.route("/addC").post((req,res)=>{

        const EmployeeId = req.body.EmployeeId;
        const ProblemTheyHave = req.body.ProblemTheyHave;
        const Solution = req.body.Solution;
       
    console.log(req.body);
        const newEmployee = new employeeproblem({

            EmployeeId,
           ProblemTheyHave,
           Solution,


        })

        newEmployee.save().then(()=>{

            res.json("Employee added")
        }).catch((err)=>{
            console.log(err);// just like exeptinal handling

        })


})

http://localhost:5000/employeeproblem/display 

router.route("/display").get((req,res)=>{

    employeeproblem.find().then((employeeProblem)=>{

        res.json(employeeProblem)
    }).catch((err)=>{

        console.log(err)

    })
})

http://localhost:5000/employee/update

router.route("/update/:id").put(async (req,res)=>{

    let userId = req.params.id;
    const{EmployeeId ,FirstName ,LastName ,NIC ,position ,phoneNo, email ,address ,branch } = req.body; //dstructure

    const  updateEmployee = {
        EmployeeId,
        FirstName,
        LastName,
        NIC,
        position,
        phoneNo,
        email,
        address,
        branch

    }

    const update = await employee.findByIdAndUpdate(userId, updateEmployee)
    .then(()=>{
    
    res.status(200).send({states: "User updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data",error : err.message});
    })   

})

//http://localhost:5000/employee/delete

router.route("/delete/:id").delete(async (req,res) =>{
    let userId = req.params.id;

    await employee.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status:"user delete"});
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user : err.messege "});

    })

})

router.route("/get/:id").get(async(req,res) => {
let userId = req.params.id;
await employee.findById(userId)
.then(()=>{

    res.status(200).send({status: "user fetched" , user :user})

}).catch(()=> {
    console.log(err.message);
    res.status(500).send({ status :"error with get user",error: err.message});
})

})




module.exports = router;