const router = require("express").Router();
let systemizedDe = require("../models/systemizedDesign");
const multer = require('multer');

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, './ProImg');
    },
    filename:function(req,file,cb){
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const upload = multer({storage: storage});
//pload.single('productImage'),
router.route("/addDesign").post((req,res)=>{

    console.log(req.file);
    const designNum = req.body.designNum;
    const landArea = req.body.landArea;
    const buildingArea = req.body.buildingArea;
    const bedRooms = req.body.bedRooms;
    const bathRooms = req.body.bathRooms;
    // const productImage = req.file.path;
    

    const newRequest = new systemizedDe({
        designNum,
        landArea,
        buildingArea,
        bedRooms,
        bathRooms,
        //productImage
    })

    //javascript promise = then
    newRequest.save().then(()=>{
        res.json("New Systemized Design Added")
        //json format eken response ekk widihata yawanawa
    }).catch((err)=>{
        console.log(err); //terminal eke error eka display karanawa
    })
    //this is like the exception handling



})


//backend url eka call karanawa http://localhost:8070/systemizedDesig/ 
router.route("/").get((req,res)=>{
    //body eka execute wenawa model eka call karala.
    systemizedDe.find().then((SystemizedD)=>{
        res.json(SystemizedD)
    }).catch((err)=>{
        console.log(err)
    })
}) 

//update
//backend url eka call karnawa(http://localhost:8070/systemizedRequest/update/234fd245552w) update karanna.unique id (key) ekak denawa
router.route("/update/:designId").put(async(req,res)=>{
    let sDReqId = req.params.designId; 
    //const name = req.body.name; mehema gannath puluwan
    //b structure karanna puluwan ekaparinma eka peliyen
    const{designNum,landArea,buildingArea,bedRooms,bathRooms} = req.body;

    //update karanna kalin object ekak hadaganna oni
    const updateDesign = {
        designNum,
        landArea,
        buildingArea,
        bedRooms,
        bathRooms
    }

    //cReqId eka athule user kenek innawada kiyala balanawa
    //if condition eka dala karannath puluwan, nathuwa karannath puluwan
    const updateD = await systemizedDe.findByIdAndUpdate(sDReqId,updateSysteomizedDes).then(()=>{
        res.status(200).send({status:"Systemized Design Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
})

router.route("/delete/:designId").delete(async(req,res) => {
    let sDReqId = req.params.designId;

    await systemizedDe.findByIdAndDelete(sDReqId).then(()=> {
        res.status(200).send({status: "Systemized Design Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Systemized Design",error:err.message});
    })
})
    //eka user kenekge witharak data gannawa
    router.route("/:designId").get(async(req,res) => {
        let sDReqId = req.params.designId;
        console.log(sDReqId);
        const syDReqId = await systemizedDe.findById(sDReqId)
        .then((SystemizedD)=>{
            res.status(200).send({status:"Design Fetched", SystemizedD})
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Error with get systemized design",error:err.message});
        })
     })

   


module.exports = router;

