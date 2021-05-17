import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import GenerateSalaryTableRow from './GenerateSalaryTableRow';

import '../../css/IT19167060.css';


export default class GenerateSalaryRepo extends Component {

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
      return <GenerateSalaryTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">

        <div>
         <h2 className="IT19167060-header-text">Employee Salary Details Report</h2>
         
        </div>

      <Table striped bordered hover className="IT19167060-table">
        <thead >
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
                
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
        <center>
        <button className="IT19167060-down-link">Download</button>
        </center>
    </div>);
    
    
  }
}