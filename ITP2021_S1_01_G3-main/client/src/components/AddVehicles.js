import React,{ useState } from "react"
import axios from "axios";

export default function AddVehicle(){

const[vehicleId,setVehicleId]=useState("");

const[registrationNum,SetRegNumber]=useState("");

const[type,setType]=useState("");

const[brandName,setBrandName]=useState("");

const[year,setManufactureYear]=useState("");

const[model,setModel]=useState("");

const[capasity,SetCapasity]=useState("");

const[engineNumber,setEngineNum]=useState("");

const[chassiNumber,setChassiNum]=useState("");

const[adminId,setAdminId]=useState("");

const[licenseNo,setLicenseNo]=useState("");

const[branchId,setBranchId]=useState("");


function sendData(e){
  e.preventDefault();  
  alert("Insert");

  const newVehicle={
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

  }

axios.post("http://localhost:8070/vehicle/add",newVehicle).then(()=>{
  alert("Vehicle Added")


}).catch((err)=>{
  alert(err)
})



}



return(
    
    
<div style={{}}>
<form className="container" onSubmit={sendData} style={{textAlign:'center',borderradius:5,width:600,border:'inset',borderBlockColor:'#ccc',backgroundcolor:'#f1f1f1'}}>
  <div>

  <div className="vehicleId">
     <h2>Add Vehicles</h2> 
    <label for="vehicleIdla"className="vehicleIdlala" >1)Vehicle Id:</label>
    <input type="text" className="vehicleIdIn"   id="vehicleIdId" placeholder="vehicle Id" required="required" style={{width: '80%',padding: '6px 10px', margin: '8px 0',
  display: 'inline-block',
  border: '1px solid #ccc',
  borderradius: '4px',
  boxsizing: 'border-box'
}} onChange={(e)=>{

      setVehicleId(e.target.value);

    }}>
      
    </input>
    </div>
    <br/>
    <div className="regNum" > 
    <label for="regNumla" className="regNumlala" >2)Registration Number:</label>
    <input type="text" className="regIn" id="regId" placeholder="Registration number" required="required" style={{width: '65%',padding: '6px 10px', margin: '8px 0',
  display: 'inline-block',
  border: '1px solid #ccc',
  borderradius: '4px',
  boxsizing: 'border-box'
}} onChange={(e)=>{

      SetRegNumber(e.target.value);

}}></input>
    </div>
    <br/>
    <div className="capasity"> 
    <label for="capla" className="caplala" >3)Capasity:</label>
    <input type="text" className="capIn" id="capId" placeholder="Capasity" style={{width: '80%',padding: '6px 10px', margin: '8px 0',
  display: 'inline-block',
  border: '1px solid #ccc',
  borderradius: '4px',
  boxsizing: 'border-box'
}} onChange={(e)=>{

      SetCapasity(e.target.value);

}}></input>
    </div>
    <br/>
    <div className="model">
      <label for="modella" className="modellala">4)Select Model:</label>
      <select id="modelId" className="model" style={{width: '75%',padding: '6px 10px', margin: '8px 0',
  display: 'inline-block',
  border: '1px solid #ccc',
  borderradius: '4px',
  boxsizing: 'border-box'
}} onChange={(e)=>{

      setModel(e.target.value);

}}>
        <option>Toyota</option>
        <option>Nisan</option>
        <option>Mitsubishi</option>
        <option>TATA</option>
        <option>Layland</option>
        <option>Daihatsu</option>
        <option>Mahindra</option>
        <option>Volvo</option>

        </select>
    </div>
    <br/>
    <div className="brandName">
      <label for="brandla" className="brandlala">5)Select Brand:</label>
      <select id="brandId" className="brand" style={{width: '75%',padding: '6px 10px', margin: '8px 0',
  display: 'inline-block',
  border: '1px solid #ccc',
  borderradius: '4px',
  boxsizing: 'border-box'
}} onChange={(e)=>{

      setBrandName(e.target.value);

}}>
        <option>Canter</option>
        <option>Hino</option>
        <option>Fuso</option>
        <option>Freightliner Trucks</option>
        <option>Caterpillar</option>
        <option>Kenworth</option>
        <option>DAF Truck</option>
        <option>Kenworth</option>
      </select>
        </div>
        <br/>
        <div className="type"> 
        <label for="typla" className="typlala" >6)Type:</label>
        <input type="text" className="typIn" id="typId" placeholder="Type" style={{width: '85%',padding: '6px 10px', margin: '8px 0',
  display: 'inline-block',
  border: '1px solid #ccc',
  borderradius: '4px',
  boxsizing: 'border-box'
}} onChange={(e)=>{

        setType(e.target.value);

}}></input>
        </div>
       <br/>
       <div className="manufectureYear"> 
    <label for="manula" className="manulala" >7)Manufecture Year:</label>
    <input type="date" className="manuIn" id="manuId" placeholder="Manufacture Year" style={{width: '70%',padding: '6px 10px', margin: '8px 0',
  display: 'inline-block',
  border: '1px solid #ccc',
  borderradius: '4px',
  boxsizing: 'border-box'
}} onChange={(e)=>{

      setManufactureYear(e.target.value);

}}></input>
    </div>
    <br/>
    <div className="engineNum"> 
    <label for="engila" className="engilala" >8)Engine Number:</label>
    <input type="text" className="engiIn" id="engiId" placeholder="Engine Number" style={{width: '73%',padding: '6px 10px', margin: '8px 0',
  display: 'inline-block',
  border: '1px solid #ccc',
  borderradius: '4px',
  boxsizing: 'border-box'
}} onChange={(e)=>{

      setEngineNum(e.target.value);

}}></input>
    </div>
    <br/>
    <div className="chassiNum"> 
    <label for="chasila" className="chasilala" >9)chassi Number:</label>
    <input type="text" className="chassiIn" id="chassiId" placeholder="Chassi Number" style={{width: '74%',padding: '6px 10px', margin: '8px 0',
  display: 'inline-block',
  border: '1px solid #ccc',
  borderradius: '4px',
  boxsizing: 'border-box'
}} onChange={(e)=>{

    setChassiNum(e.target.value);

}}></input>
    </div>
    <br/>

    <div className="adminId"> 
    <label for="adminla" className="adminlala" >10)Admin Id:</label>
    <input type="text" className="adminIn" id="adminIdId" placeholder="Admin Id" required="required" style={{width: '81%',padding: '6px 10px', margin: '8px 0',
  display: 'inline-block',
  border: '1px solid #ccc',
  borderradius: '4px',
  boxsizing: 'border-box'
}} onChange={(e)=>{

    setAdminId(e.target.value);

}}></input>
    </div>
    <br/>

    <div className="licenseNo"> 
    <label for="licensela" className="licencelala" >11)license Number:</label>
    <input type="text" className="licenseIn" id="licenseId" placeholder="License Number" required="required" style={{width: '72%',padding: '6px 10px', margin: '8px 0',
  display: 'inline-block',
  border: '1px solid #ccc',
  borderradius: '4px',
  boxsizing: 'border-box'
}} onChange={(e)=>{

    setLicenseNo(e.target.value);

}}></input>
    </div>
    <br/>

    <div className="branchId"> 
    <label for="branchla" className="branchlala" >12)Branch Id:</label>
    <input type="text" className="branchIn" id="branchId" placeholder="Branch Id" style={{width: '80%',padding: '6px 10px', margin: '8px 0',
  display: 'inline-block',
  border: '1px solid #ccc',
  borderradius: '4px',
  boxsizing: 'border-box'
}} onChange={(e)=>{

    setBranchId(e.target.value);

}}></input>
    </div>
    <br/>
  <button type="submit" className="SubmitAdd"  style={{color:'#000000',backgroundColor:'#D3D3D3',width: '100%',borderradius: '12px'}}>Submit</button>
</div>
</form>
</div>
)


}







