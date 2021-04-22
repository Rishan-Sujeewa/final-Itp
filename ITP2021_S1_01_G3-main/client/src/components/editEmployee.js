import axios from 'axios';
import React, { Component } from 'react';
import '../css/IT19197760.css';
import Header from './eHeader';





export default class editEmployee extends Component {

  constructor(props) {
    super(props);
    this.state={
      EmployeeId: '',
      FirstName: '',
      LastName: '',
      NIC: '',
      position: '',
      phoneNo: '',
      email: '',
      address: '',
      branch: '',
    }
  }

  handleInputChange = (e) =>{
      const {name,value} =e.target;

      this.setState({

        ...this.state,
        [name]:value


      })



  }

  onsubmit = (e) =>{

    e.preventDefault();
    const id = this.props.match.params.id;

    const {EmployeeId, FirstName, LastName,NIC,position, phoneNo,email,address,branch} = this.state;

    const data ={
      EmployeeId: EmployeeId,
      FirstName:FirstName, 
      LastName: LastName,
      NIC: NIC,
      position: position,
      phoneNo: phoneNo,
      email: email,
      address: address,
      branch: branch,

    }
  
    console.log(data)

    axios.put('http://localhost:5000/employee/editEmployee/',data).then((res)=>{

    if(res.data.success){
      alert("Updated sucsessfully")
      this.setState(
        {

          EmployeeId: "",
          FirstName: "",
          LastName: "",
          NIC: "",
          position: "",
          phoneNo: "",
          email: "",
          address: "",
          branch: ""
        }
      )
    }
      });

  }
    

//
  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get('http://localhost:5000/Allemployee/').then((res) => {
        if(res.data.success){
          this.setState({
            EmployeeId:res.data.post.EmployeeId,
            FirstName:res.data.post.FirstName,
            LastName:res.data.post.LastName,
            NIC:res.data.post.NIC,
            position:res.data.post.position,
            phoneNo:res.data.post.phoneNo,
            email:res.data.post.email,
            address:res.data.post.address,
            branch:res.data.post.branch,


          });

          console.log(this.state.post);

        }



    });
  }



  render(){

    return(
      <div className ="container">
        < Header />

        <h1 style={{marginLeft : 500 ,fontSize: 25, }}> Update Employee Details</h1>
      <form >
<div class="form-group" style={{marginLeft : 20}}>
  <label for="eid">Employee Id</label>
  <input type="text" class="form-control" id="eid"  placeholder="Enter Employee Id" >
 
  </input>

</div>
<div class="form-group" style={{marginLeft : 20}}>
<label for="fName">First Name</label>
  <input type="text" class="form-control" id="fName"  placeholder="Enter First Name" >

  

  </input>

</div>
<div class="form-check">
<label for="Lname">Last Name</label>
  <input type="text" class="form-control" id="Lname"  placeholder="Enter Last Name" >

  </input>

</div>

<div class="form-check">
<label for="NIC">NIC</label>
  <input type="text" class="form-control" id="NIC"  placeholder="Enter NIC " >
</input>

</div>

<div class="form-check">
<label for="position">Position</label>
  <input type="text" class="form-control" id="position"  placeholder="Enter Position" >
</input>

</div>

<div class="form-check">
<label for="phone">Phone Number</label>
  <input type="text" class="form-control" id="phone"  placeholder="Enter Phone Number" >

</input>

</div>

<div class="form-check">
<label for="Email">Email</label>
  <input type="text" class="form-control" id="Email"  placeholder="Enter Email" >

</input>

</div>

<div class="form-check">
<label for="address">Address</label>
  <input type="text" class="form-control" id="address"  placeholder="Enter Address" 

></input>

</div>

<div class="form-check">
<label for="branch">Branch</label>
  <input type="text" class="form-control" id="branch"  placeholder="Enter Branch" 
></input>

</div>

<button type="submit" class="btn btn-primary"  style={{marginLeft:200}} >Update</button>
</form>

</div>

  )

  
}
}