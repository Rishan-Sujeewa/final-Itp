import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../../css/it19197760.css';
import ReactFormInputValidation from 'react-form-input-validation';

let emailValid = true;
let phnValid = true;
export default class CreateEmployee extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fields: {
        FirstName: "",
        email: "",
        phoneNo: ""
      },
      errors: {}
    };
    this.form = new ReactFormInputValidation(this);
    this.form.useRules({
        FirstName: "required",
        email: "required|email",
        phoneNo: "required|numeric|digits_between:10,12",
    });
    this.form.onformsubmit = (fields) => {
    
    }

    // Setting up functions
    
    this.onChangeEmployeeId = this.onChangeEmployeeId.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeNIC = this.onChangeNIC.bind(this);
    this.onChangeposition = this.onChangeposition.bind(this);
    this.onChangephoneNo = this.onChangephoneNo.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangeaddress = this.onChangeaddress.bind(this);
    this.onChangebranch = this.onChangebranch.bind(this);
 
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      
      EmployeeId: '',
      FirstName: '',
      LastName: '',
      NIC: '',
      position: '',
      phoneNo: '',
      email: '',
      address: '',
      branch: '',
      valid : ''
    }
  }

 

  onChangeEmployeeId(e) {
    this.setState({ EmployeeId: e.target.value })
  }

  onChangeFirstName(e) {
    this.setState({ FirstName: e.target.value })
  }

  onChangeLastName(e) {
    this.setState({LastName : e.target.value })
  }

  onChangeNIC(e) {
    this.setState({NIC : e.target.value })
  }
  onChangeposition(e) {
    this.setState({ position: e.target.value })
  }
  onChangephoneNo(e) {
    this.setState({ phoneNo: e.target.value })

    let param = e.target.value;

    phnValid = this.validatePhn(e.target.value)
   
    console.log(param.length);

    console.log(phnValid);
  }
  onChangeemail(e) {

    if(!e.target.value){emailValid = ''} 

    this.setState({email : e.target.value })

    emailValid = this.validateEmail(e.target.value);


  }
  
  onChangeaddress(e) {
    this.setState({ address: e.target.value })
  }

  onChangebranch(e) {
    this.setState({ branch: e.target.value })
  }

  validatePhn(phone) {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    console.log(regex.test(phone))
    return regex.test(phone);
  }

  validateEmail (email) {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  }

 
  onSubmit(e) {
    // e.preventDefault()

    if(emailValid != true || phnValid != true){
      alert("Validation Fail");
      e.preventDefault()
    }


    // console.log(`Employee successfully created!`);

    
    const EmployeeObject = {
      EmployeeId: this.state.EmployeeId,
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      NIC: this.state.NIC,
      position: this.state.position,
      phoneNo: this.state.phoneNo,
      email: this.state.email,
      address: this.state.address,
      branch: this.state.branch,

      };

      console.log(emailValid,phnValid);


      if(emailValid == true || phnValid == true){
        axios.post('http://localhost:5000/Employee/create-Employee', EmployeeObject)
        .then(res => console.log(res.data));
      }
     
    

     
  }

  render() {
    return (<div className="form-wrapper">

    
    <Form onSubmit={this.onSubmit} className= "it19197760-myForm">
    <h2 className ="it19197760-head" >ADD EMPLOYEE</h2>
      <Form.Group controlId="EmployeeId">
        <Form.Label>EmployeeId</Form.Label>
        <Form.Control type="text" value={this.state.EmployeeId} onChange={this.onChangeEmployeeId} required />
      </Form.Group>

      <Form.Group controlId="FirstName">
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="text" value={this.state.FirstName} onChange={this.onChangeFirstName}  />
      </Form.Group>

      <Form.Group controlId="LastName">
        <Form.Label>LastName</Form.Label>
        <Form.Control type="text" value={this.state.LastName} onChange={this.onChangeLastName} required />
      </Form.Group>


      <Form.Group controlId="NIC">
        <Form.Label>NIC</Form.Label>
        <Form.Control type="text" value={this.state.NIC} onChange={this.onChangeNIC} required/>
      </Form.Group>

      <Form.Group controlId="position">
        <Form.Label>position</Form.Label>
        <Form.Control type="text" value={this.state.position} onChange={this.onChangeposition} required />
      </Form.Group>

      
     
      <Form.Group controlId="phoneNo">
        <Form.Label>phoneNo</Form.Label>
        <Form.Control typhoneNope="Number" value={this.state.phoneNo} onChange={this.onChangephoneNo} required />
        { phnValid==true ?   <></>  : <p style ={{color : "red"}}>Phone number is not valid!</p>  }
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" value={this.state.email} onChange={this.onChangeemail} required />
        { emailValid==true ?   <></>  : <p style ={{color : "red"}}>Email is not valid!</p>  }
      </Form.Group>

      <Form.Group controlId="address">
        <Form.Label>address</Form.Label>
        <Form.Control type="text" value={this.state.address} onChange={this.onChangeaddress}  />
      </Form.Group>

      
      <Form.Group controlId="branch">
        <Form.Label>branch</Form.Label>
        <Form.Control type="text" value={this.state.branch} onChange={this.onChangebranch}  />
      </Form.Group>

      <Button variant="danger" size="lg" block="block" type="submit" className="btn it19197760-my-btn" >
        Create Employee
      </Button>
    </Form>
  </div>);
    
  }
}
