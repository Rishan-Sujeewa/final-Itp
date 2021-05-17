const router = require("express").Router();
let systemized = require("../models/systemizedRequest");

router.route("/addS").post((req,res)=>{
    const planNumber = req.body.planNumber;
    const name = req.body.Cname;
    const email = req.body.email;
    const phone = req.body.phone;
    const otherComments = req.body.comments;

    const newRequest = new systemized({
        planNumber,
        name,
        email,
        phone,
        otherComments
    })

    //javascript promise = then
    newRequest.save().then(()=>{
        res.json("New Systemized Request Added")
        //json format eken response ekk widihata yawanawa
    }).catch((err)=>{
        console.log(err); //terminal eke error eka display karanawa
    })
    //this is like the exception handling



})


//backend url eka call karanawa http://localhost:8070/customizedRequest/ 
router.route("/").get((req,res)=>{
    //body eka execute wenawa model eka call karala.
    systemized.find().then((Systemized)=>{
        res.json(Systemized)
    }).catch((err)=>{
        console.log(err)
    })
}) 

//update
//backend url eka call karnawa(http://localhost:8070/systemizedRequest/update/234fd245552w) update karanna.unique id (key) ekak denawa
router.route("/update/:systemizedId").put(async(req,res)=>{
    let sReqId = req.params.systemizedId; 
    //const name = req.body.name; mehema gannath puluwan
    //b structure karanna puluwan ekaparinma eka peliyen
    const{planNumber,name,email,phone,otherComments,startingDate} = req.body;

    //update karanna kalin object ekak hadaganna oni
    const updateSysteomizedReq = {
        planNumber,
        name,
        email,
        phone,
        otherComments,
        startingDate
    }

    //cReqId eka athule user kenek innawada kiyala balanawa
    //if condition eka dala karannath puluwan, nathuwa karannath puluwan
    const update = await systemized.findByIdAndUpdate(sReqId,updateSysteomizedReq).then(()=>{
        res.status(200).send({status:"Systemized Request Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
})

router.route("/delete/:systemizedId").delete(async(req,res) => {
    let sReqId = req.params.systemizedId;

    await systemized.findByIdAndDelete(sReqId).then(()=> {
        res.status(200).send({status: "Systemized Request Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Systemized Request",error:err.message});
    })
})
    //eka user kenekge witharak data gannawa
    router.route("/:systemizedId").get(async(req,res) => {
        let sReqId = req.params.systemizedId;
        const reqS = await systemized.findById(sReqId).then((Systemized)=>{
            res.status(200).send({status:"Request Fetched", Systemized})
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Error with get systemized request",error:err.message});
        })
    })


module.exports = router;

