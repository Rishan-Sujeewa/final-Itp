import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../../css/IT19167060.css';

export default class EditSalary extends Component {

  constructor(props) {
    super(props)

    this.onChangeSalaryID = this.onChangeSalaryID.bind(this);
    this.onChangeFname = this.onChangeFname.bind(this);
    this.onChangeLname = this.onChangeLname.bind(this);
    this.onChangeDesignation = this.onChangeDesignation.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeWorkHours = this.onChangeWorkHours.bind(this);
    this.onChangeHourlyRate = this.onChangeHourlyRate.bind(this);
    this.onChangeIncentive = this.onChangeIncentive.bind(this);
    this.onChangeDeduction = this.onChangeDeduction.bind(this);
    this.onChangeTotalSalary = this.onChangeTotalSalary.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
        salaryID: '',
        fname: '',
        lname: '',
        designation: '',
        date: '',
        workHours: Number,
        hourlyRate: Number,
        incentive: Number,
        deduction: Number,
        totalSalary: Number
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/salaries/edit-salary/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          
            salaryID: res.data.salaryID,
            fname: res.data.fname,
            lname: res.data.lname,
            designation: res.data.designation,
            date: res.data.date,
            workHours: res.data.workHours,
            hourlyRate: res.data.hourlyRate,
            incentive: res.data.incentive,
            deduction: res.data.deduction,
            totalSalary: res.data.totalSalary
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }


  onChangeSalaryID(e) {
    this.setState({ salaryID: e.target.value })
  }
  onChangeFname(e) {
    this.setState({ fname: e.target.value })
  }
  onChangeLname(e) {
    this.setState({ lname: e.target.value })
  }
  onChangeDesignation(e) {
    this.setState({ designation: e.target.value })
  }
  onChangeDate(e) {
    this.setState({ date: e.target.value })
  }
  onChangeWorkHours(e) {
    this.setState({ workHours: e.target.value })
  }
  onChangeHourlyRate(e) {
    this.setState({ hourlyRate: e.target.value })
  }
  onChangeIncentive(e) {
    this.setState({ incentive: e.target.value })
  }
  onChangeDeduction(e) {
    this.setState({ deduction: e.target.value })
  }
  onChangeTotalSalary(e) {
    this.setState({ totalSalary: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()

    const salaryObject = {
            salaryID: this.state.salaryID,
            fname: this.state.fname,
            lname: this.state.lname,
            designation: this.state.designation,
            date: this.state.date,
            workHours: this.state.workHours,
            hourlyRate: this.state.hourlyRate,
            incentive: this.state.incentive,
            deduction: this.state.deduction,
            totalSalary: this.state.totalSalary
    };

    axios.put('http://localhost:5000/salaries/update-salary/' + this.props.match.params.id, salaryObject)
      .then((res) => {
        console.log(res.data)
        console.log('Salary successfully updated')
        //window.location.href=window.location.href;
        window.location = "/salary-list";
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Salary List 
    this.props.history.push('/salary-list')
  }

  calculate = () => {
   
    let basicSalary = parseFloat(this.state.workHours * this.state.hourlyRate); 
    let salaryWithIncentive = basicSalary + parseFloat(this.state.incentive);
    let tSalary =  salaryWithIncentive - parseFloat(this.state.deduction);
  
this.setState({totalSalary: tSalary});
    //console.log(basicSalary, salaryWithIncentive, tSalary, this.state.totalSalary);

   }


  render() {
    return (<div className="IT19167060-form-wrapper">
        <div>
        <h2 className="IT19167060-header-text">Update Employee Salary Details</h2>
        </div>

      <Form onSubmit={this.onSubmit}>
        
        <Form.Group controlId="salaryID">
          <Form.Label>Employee SalaryID</Form.Label>
          <Form.Control type="text" value={this.state.salaryID} onChange={this.onChangeSalaryID} required/>
        </Form.Group>

        <Form.Group controlId="fname">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" value={this.state.fname} onChange={this.onChangeFname} required/>
        </Form.Group>

        <Form.Group controlId="lname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" value={this.state.lname} onChange={this.onChangeLname} required/>
        </Form.Group>

        <Form.Group controlId="designation">
          <Form.Label>Designation</Form.Label>
          <Form.Control type="text" value={this.state.designation} onChange={this.onChangeDesignation} required/>
        </Form.Group>

        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" value={this.state.date} onChange={this.onChangeDate} required/>
        </Form.Group>

        <Form.Group controlId="workHours">
          <Form.Label>Work Hours</Form.Label>
          <Form.Control type="number" value={this.state.workHours} onChange={this.onChangeWorkHours} required/>
        </Form.Group>

        <Form.Group controlId="hourlyRate">
          <Form.Label>Hourly Rate (Rs)</Form.Label>
          <Form.Control type="number" value={this.state.hourlyRate} onChange={this.onChangeHourlyRate} required/>
        </Form.Group>

        <Form.Group controlId="incentive">
          <Form.Label>Incentive (Rs)</Form.Label>
          <Form.Control type="number" value={this.state.incentive} onChange={this.onChangeIncentive} required/>
        </Form.Group>

        <Form.Group controlId="deduction">
          <Form.Label>Deduction (Rs)</Form.Label>
          <Form.Control type="number" value={this.state.deduction} onChange={this.onChangeDeduction} required/>
        </Form.Group>

        <center>
        <button className="IT19167060-down-link" onClick={() => this.calculate()} type="button">Calculate</button>
        </center>

        <Form.Group controlId="totalSalary">
          <Form.Label>Total Salary (Rs)</Form.Label>
          <Form.Control disabled type="number" value={this.state.totalSalary} onChange={this.onChangeTotalSalary} required/>
        </Form.Group>

        <center>
        <Button className="IT19167060-repo-link" type="submit">
          Update
        </Button>
        </center>
      </Form>
    </div>);
  }
}