//const employee = require("../models/employee");

const router = require("express").Router();
let employee = require("../models/employee");

http://localhost.5000/employee/add

router.route("/add").post((req,res)=>{

        const EmployeeId = req.body.EmployeeId;
        const FirstName = req.body.FirstName;
        const LastName = req.body.LastName;
        const NIC = req.body.NIC;
        const position = req.body.position;
        const phoneNo = Number(req.body.phoneNo);
        const email = req.body.email;
        const address = req.body.address;
        const branch = req.body.branch;

        const newEmployee = new employee({

            EmployeeId,
            FirstName,
            LastName,
            NIC,
            position,
            phoneNo,
            email,
            address,
            branch


        })

        newEmployee.save().then(()=>{

            res.json("Employee added")
        }).catch((err)=>{
            console.log(err);// just like exeptinal handling

        })


})

http://localhost:5000/employee //display

router.route("/").get((req,res)=>{

    employee.find().then((employee)=>{

        res.json(employee)
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