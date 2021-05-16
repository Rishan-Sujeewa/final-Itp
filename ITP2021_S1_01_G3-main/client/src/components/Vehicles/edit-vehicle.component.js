import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../../css/it19142456.css';
export default class EditVehicle extends Component {
  
  constructor(props) {
    super(props)

    // Setting up functions
    
    this.onChangeVehicleId = this.onChangeVehicleId.bind(this);
    this.onChangeRegNum = this.onChangeRegNum.bind(this);
    this.onChangeCapasity = this.onChangeCapasity.bind(this);
    this.onChangeModel = this.onChangeModel.bind(this);
    this.onChangeBrandName = this.onChangeBrandName.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeManufectureYear = this.onChangeManufectureYear.bind(this);
    this.onChangeEngineNum = this.onChangeEngineNum.bind(this);
    this.onChangeChassiNum = this.onChangeChassiNum.bind(this);
    this.onChangeLicenseNo = this.onChangeLicenseNo.bind(this);
    this.onChangeAdminId = this.onChangeAdminId.bind(this);
    this.onChangeBranchId = this.onChangeBranchId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      
        vehicleId:'',
        registrationNum:'',
        type:'',
        brandName:'',
        year:'',
        model:'',
        capasity:'',
        chassiNumber:'',
        engineNumber:'',
        adminId:'',
        licenseNo:'',
        branchId:''
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/vehicles/edit-vehicle/'+this.props.match.params.id)
      .then(res => {
        this.setState({
          
            vehicleId: res.data.vehicleId,
            registrationNum: res.data.registrationNum,
            type: res.data.type,
            brandName: res.data.brandName,
            year: res.data.year,
            model: res.data.model,
            capasity: res.data.capasity,
            chassiNumber: res.data.chassiNumber,
            engineNumber: res.data.engineNumber,
            adminId: res.data.adminId,
            licenseNo: res.data.licenseNo,
            branchId: res.data.branchId
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeVehicleId(e) {
    this.setState({  vehicleId: e.target.value })
  }
  onChangeRegNum(e) {
    this.setState({ registrationNum: e.target.value })
  }
  onChangeType(e) {
    this.setState({ type: e.target.value })
  }
  onChangeBrandName(e) {
    this.setState({ brandName: e.target.value })
  }
  onChangeManufectureYear(e) {
    this.setState({ year: e.target.value })
  }
  onChangeModel(e) {
    this.setState({ model: e.target.value })
  }
  onChangeCapasity(e) {
    this.setState({ capasity: e.target.value })
  }
  onChangeChassiNum(e) {
    this.setState({ chassiNumber: e.target.value })
  }
  onChangeEngineNum(e) {
    this.setState({ engineNumber: e.target.value })
  }
  onChangeAdminId(e) {
    this.setState({ adminId: e.target.value })
  }
  onChangeLicenseNo(e) {
    this.setState({ licenseNo: e.target.value })
  }
  onChangeBranchId(e) {
    this.setState({ branchId: e.target.value })
  }
  
  onSubmit(e) {
    e.preventDefault()

    

    const vehicleObject = {
        vehicleId: this.state.vehicleId,
        registrationNum: this.state.registrationNum,
        type: this.state.type,
        brandName: this.state.brandName,
        year: this.state.year,
        model: this.state.model,
        capasity: this.state.capasity,
        chassiNumber: this.state.chassiNumber,
        engineNumber: this.state.engineNumber,
        adminId: this.state.adminId,
        licenseNo: this.state.licenseNo,
        branchId: this.state.branchId
      };
      axios.put('http://localhost:5000/vehicles/update-vehicle/'+ this.props.match.params.id,vehicleObject)
        .then((res) => {
          console.log(res.data)
          console.log('Vehicle successfully updated')
          window.location.href=window.location.href;
        }).catch((error) => {
          console.log(error)
        })
  
      // Redirect to Vehiccle List 
     // this.props.history.push('/vehicle-list')
      window.location = "/vehicle-list";
    

   
  }
  
  
  
  render() {
      return (<div className="form-wrapper">
        <br/>
         <h2 className="it19142456-heading">Edit vehicle</h2>
      <Form onSubmit={this.onSubmit} className="it19142456-myForm">

      <Form.Group controlId="vehicleId">
          <Form.Label>Vehicle Id</Form.Label>
          <Form.Control type="text" value={this.state.vehicleId}/>
        </Form.Group>

        <Form.Group controlId="registrationNum">
          <Form.Label>Registration Number</Form.Label>
          <Form.Control type="text" value={this.state.registrationNum} onChange={this.onChangeRegNum}/>
        </Form.Group>

        <Form.Group controlId="capasity">
          <Form.Label>Capasity</Form.Label>
          <Form.Control type="text" value={this.state.capasity} onChange={this.onChangeCapasity}/>
        </Form.Group>

        <Form.Group controlId="model">
          <Form.Label>Model</Form.Label>
          <Form.Control type="text" value={this.state.model} onChange={this.onChangeModel}/>
        </Form.Group>

        <Form.Group controlId="brandName">
          <Form.Label>Brand Name</Form.Label>
          <Form.Control type="text" value={this.state.brandName} onChange={this.onChangeBrandName}/>
        </Form.Group>

        <Form.Group controlId="type">
          <Form.Label>Type</Form.Label>
          <Form.Control type="text" value={this.state.type} onChange={this.onChangeType}/>
        </Form.Group>

        <Form.Group controlId="year">
          <Form.Label>Manufecture Year</Form.Label>
          <Form.Control type="date" value={this.state.year} onChange={this.onChangeManufectureYear}/>
        </Form.Group>

        <Form.Group controlId="engineNum">
          <Form.Label>Engine Number</Form.Label>
          <Form.Control type="text" value={this.state.engineNumber} onChange={this.onChangeEngineNum}/>
        </Form.Group>

        <Form.Group controlId="chassiNum">
          <Form.Label>Chassi Number</Form.Label>
          <Form.Control type="text" value={this.state.chassiNumber} onChange={this.onChangeChassiNum}/>
        </Form.Group>

        <Form.Group controlId="licenseNo">
          <Form.Label>License Number</Form.Label>
          <Form.Control type="text" value={this.state.licenseNo} onChange={this.onChangeLicenseNo}/>
        </Form.Group>

        <Form.Group controlId="adminId">
          <Form.Label>Admin Id</Form.Label>
          <Form.Control type="text" value={this.state.adminId} onChange={this.onChangeAdminId}/>
        </Form.Group>

        <Form.Group controlId="branchId">
          <Form.Label>Branch ID</Form.Label>
          <Form.Control type="number" value={this.state.branchId} onChange={this.onChangeBranchId}/>
        </Form.Group>

        <Button size="lg" block="block" type="submit" className="btn it19142456-my-btn">
          Update vehicle
        </Button>
      </Form>
    </div>
        
      );
    }
  }