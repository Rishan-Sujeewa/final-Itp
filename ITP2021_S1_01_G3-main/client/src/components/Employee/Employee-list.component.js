import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import EmployeeTableRow from './EmployeeTableRow';
import '../../css/IT19197760.css';
import { Link } from "react-router-dom";


export default class EmployeeList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Employee: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/Employee/')
      .then(res => {
          console.log(res.data)
        this.setState({
          Employee: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.Employee.map((res, i) => {
      return <EmployeeTableRow obj={res} key={i} />;
    });
  }


  render() {
    
    return (<div className="table-wrapper">
<h2 className ="it19197760-head">EMPLOYEE LIST</h2>

    <br></br>
        <center>
        <Link to={'/create-Employee'} className ="it19197760-add-link">
          
        + Add Employee
        </Link>
      </center>

      <Table  className= "it19197760-displayTable">
        <thead>
          <tr>
                <th>EmployeeId</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>NIC</th>
                <th>position</th>
                <th>phoneNo</th>
                <th>email</th>
                <th>address</th>
                <th>branch</th>
                
                <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}