import React,{useState} from "react"
import axios from "axios";
import '../css/IT19197760.css';
import Header from './eHeader';


export default function Addemployee(){

    const [EmployeeId ,setEmployeeId] = useState("");
    const [FirstName ,setFirstName] = useState("");
    const [LastName ,setLastName] = useState("");
    const [NIC ,setNIC] = useState("");
    const [position ,setposition] = useState("");
    const [phoneNo ,setphoneNo] = useState("");
    const [email ,setemail] = useState("");
    const [address ,setaddress] = useState("");
    const [branch ,setbranch] = useState("");

    function sendData(e){  
        e.preventDefault();

        alert("Insert");

        const newEmployee ={

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

        axios.post("http://localhost:5000/employee/add",newEmployee).then(()=>{

        alert("Employee Added")

        setEmployeeId("");
        setFirstName("");
        setLastName("");
        setNIC("");
        setaddress("");
        setbranch("");
        setemail("");
        setphoneNo("");
        setposition("");


        }).catch((err)=>{
            alert(err)
        })

        
    }



    return(

      <div className ="text2" >

< Header />

        <h1 style={{marginLeft : 500 ,fontSize: 25, }}> Update Employee Details</h1>
      
        <div className ="container">
        <form onSubmit={sendData}>
  <div  class="form-group" style={{marginLeft : 20}}>
    <label for="eid">Employee Id</label>
    <input type="text" class="form-control" id="eid"  placeholder="Enter Employee Id" onChange = {(event)=>{

        setEmployeeId(event.target.value);

    }}></input>
  
  </div>
  <div class="form-group"style={{marginLeft : 20}}>
  <label for="fName">First Name</label>
    <input type="text" class="form-control" id="fName"  placeholder="Enter First Name" onChange = {(event)=>{

    setFirstName(event.target.value);

    }}></input>
  
  </div>
  <div class="form-check">
  <label for="Lname">Last Name</label>
    <input type="text" class="form-control" id="Lname"  placeholder="Enter Last Name" onChange = {(event)=>{

setLastName(event.target.value);

    }   }></input>
  
  </div>

  <div class="form-check">
  <label for="NIC">NIC</label>
    <input type="text" class="form-control" id="NIC"  placeholder="Enter NIC " onChange = {(event)=>{

setNIC(event.target.value);

}}></input>
  
  </div>

  <div class="form-check">
  <label for="position">Position</label>
    <input type="text" class="form-control" id="position"  placeholder="Enter Position" onChange = {(event)=>{

setposition(event.target.value);

}}></input>
  
  </div>

  <div class="form-check">
  <label for="phone">Phone Number</label>
    <input type="text" class="form-control" id="phone"  placeholder="Enter Phone Number" onChange = {(event)=>{

setphoneNo(event.target.value);

}}></input>
  
  </div>

  <div class="form-check">
  <label for="Email">Email</label>
    <input type="text" class="form-control" id="Email"  placeholder="Enter Email" onChange = {(event)=>{

setemail(event.target.value);

}}></input>
  
  </div>

  <div class="form-check">
  <label for="address">Address</label>
    <input type="text" class="form-control" id="address"  placeholder="Enter Address" onChange = {(event)=>{

setaddress(event.target.value);

}}></input>
  
  </div>

  <div class="form-check">
  <label for="branch">Branch</label>
    <input type="text" class="form-control" id="branch"  placeholder="Enter Branch" onChange = {(event)=>{

setbranch(event.target.value);

}}></input>
  
  </div>

  <button type="submit" class="btn btn-primary" style={{marginLeft:200}}>ADD EMPLOYEE</button>
</form>

</div>
</div>

    )

        

    
   

    



}