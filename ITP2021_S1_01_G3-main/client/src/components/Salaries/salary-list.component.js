import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import SalaryTableRow from './SalaryTableRow';
import '../../css/IT19167060.css';


export default class SalaryList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      salaries: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/salaries/')
      .then(res => {
          console.log(res.data)
        this.setState({
          salaries: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.salaries.map((res, i) => {
      return <SalaryTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">

       
         <h2 className="IT19167060-header-text">Employee Salary Details</h2>
         
         <center>
         <Link to={"/create-salary"} className="IT19167060-add-link">
                  +Add Salary Details
        </Link>
        </center>

      <Table striped bordered hover className="IT19167060-table">
        <thead className="IT19167060-table-head">
          <tr>
                <th>SalaryID</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Designation</th>
                <th>Date</th>
                <th>Work Hours</th>
                <th>Hourly Rate</th>
                <th>Incentive</th>
                <th>Deduction</th>
                <th>Total Salary</th>
                <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
      <div className="IT19167060-down-link-link">
      <center>
    <Link to={"/generate-salary"} className="IT19167060-down-link">
       Generate Reports
    </Link>
    </center>
    </div>
    </div>);
    
  }
}