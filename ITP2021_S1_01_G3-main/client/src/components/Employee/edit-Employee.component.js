import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../../css/it19197760.css';

export default class EditSalary extends Component {

  constructor(props) {
    super(props)

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

    // State
    this.state = {
       
      EmployeeId: '',
      FirstName: '',
      LastName: '',
      NIC: '',
      position: '',
      phoneNo: '',
      email: '',
      address: '',
      branch: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/Employee/edit-Employee/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          
          EmployeeId: res.data.EmployeeId,
          FirstName: res.data.FirstName,
          LastName: res.data.LastName,
          NIC: res.data.NIC,
          position: res.data.position,
          phoneNo: res.data.phoneNo,
          email: res.data.email,
          address: res.data.address,
          branch: res.data.branch,
            
        });
      })
      .catch((error) => {
        console.log(error);
      })
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
  }
  onChangeemail(e) {
    this.setState({email : e.target.value })
  }
  
  onChangeaddress(e) {
    this.setState({ address: e.target.value })
  }

  onChangebranch(e) {
    this.setState({ branch: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

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

    axios.put('http://localhost:5000/Employee/update-Employee/' + this.props.match.params.id, EmployeeObject)
      .then((res) => {
        console.log(res.data)
        console.log('Employee successfully updated')
        window.location.href=window.location.href;
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Employee List 
    this.props.history.push('/Employee-list')
  }


  render() {
    return (
    
    <div className="form-wrapper">
      <h2 className ="it19197760-head">EDIT EMPLOYEE</h2>
    <Form onSubmit={this.onSubmit} className= "it19197760-myForm">
      <Form.Group controlId="EmployeeId">
        <Form.Label>EmployeeId</Form.Label>
        <Form.Control type="text" value={this.state.EmployeeId} onChange={this.onChangeEmployeeId} />
      </Form.Group>

      <Form.Group controlId="FirstName">
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="text" value={this.state.FirstName} onChange={this.onChangeFirstName} />
      </Form.Group>

      <Form.Group controlId="LastName">
        <Form.Label>LastName</Form.Label>
        <Form.Control type="text" value={this.state.LastName} onChange={this.onChangeLastName} />
      </Form.Group>

      <Form.Group controlId="NIC">
        <Form.Label>NIC</Form.Label>
        <Form.Control type="text" value={this.state.NIC} onChange={this.onChangeNIC} />
      </Form.Group>

      <Form.Group controlId="position">
        <Form.Label>position</Form.Label>
        <Form.Control type="text" value={this.state.position} onChange={this.onChangeposition} />
      </Form.Group>
     
      <Form.Group controlId="phoneNo">
        <Form.Label>phoneNo</Form.Label>
        <Form.Control typhoneNope="Number" value={this.state.phoneNo} onChange={this.onChangephoneNo} />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" value={this.state.email} onChange={this.onChangeemail} />
      </Form.Group>

      <Form.Group controlId="address">
        <Form.Label>address</Form.Label>
        <Form.Control type="text" value={this.state.address} onChange={this.onChangeaddress} />
      </Form.Group>

      
      <Form.Group controlId="branch">
        <Form.Label>branch</Form.Label>
        <Form.Control type="text" value={this.state.branch} onChange={this.onChangebranch} />
      </Form.Group>

      <Button variant="danger" size="lg" block="block" type="submit"className="btn it19197760-my-btn">
        Update Employee
      </Button>
    </Form>
  </div>);
  }
}