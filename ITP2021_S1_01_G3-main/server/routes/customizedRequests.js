const router = require("express").Router();
let customized = require("../models/customizedRequest");

router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const otherComments = req.body.comments;

    const newRequest = new customized({
        name,
        email,
        phone,
        otherComments
    })

    //javascript promise = then
    newRequest.save().then(()=>{
        res.json("New Request Added")
        //json format eken response ekk widihata yawanawa
    }).catch((err)=>{
        console.log(err); //terminal eke error eka display karanawa
    })
    //this is like the exception handling



})


//backend url eka call karanawa http://localhost:8070/customizedRequest/ 
router.route("/").get((req,res)=>{
    //body eka execute wenawa model eka call karala.
    customized.find().then((Customized)=>{
        res.json(Customized)
    }).catch((err)=>{
        console.log(err)
    })
}) 

//update
//backend url eka call karnawa(http://localhost:8070/customizedRequest/update/234fd245552w) update karanna.unique id (key) ekak denawa
router.route("/update/:customizedId").put(async(req,res)=>{
    let cReqId = req.params.customizedId; 
    //const name = req.body.name; mehema gannath puluwan
    //b structure karanna puluwan ekaparinma eka peliyen
    const{name,email,phone,otherComments} = req.body;

    //update karanna kalin object ekak hadaganna oni
    const updateCustomizedReq = {
        name,
        email,
        phone,
        otherComments
    }

    //cReqId eka athule user kenek innawada kiyala balanawa
    //if condition eka dala karannath puluwan, nathuwa karannath puluwan
    const update = await customized.findByIdAndUpdate(cReqId,updateCustomizedReq).then(()=>{
        res.status(200).send({status:"Request Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
})

router.route("/delete/:customizedId").delete(async(req,res) => {
    
    let cReqId = req.params.customizedId;

    await customized.findByIdAndDelete(cReqId).then(()=> {
        res.status(200).send({status: "Request Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Request",error:err.message});
    })
})
    //eka user kenekge witharak data gannawa
    router.route("/get/:customizedId").get(async(req,res) => {
        let cReqId = req.params.customizedId;
        const reqC = await customized.findById(cReqId).then((Customized)=>{
            res.status(200).send({status:"Request Fetched", Customized})
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Error with get request",error:err.message});
        })
    })


module.exports = router;

