import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import EmployeeTableRow from './EmployeeTableRow';
import '../../css/it19197760.css';
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";


export default class EmployeeList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Employee: []
    };
  }

  // PDF download 

  exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Employee Details";
    const headers = [["EmployeeId", "Firstname","Last name","NIC","Position","phone Number ","Email ","Address","Branch"]];

    const data = this.state.Employee.map(elt=> [elt.EmployeeId,elt.FirstName,elt.LastName,elt.NIC,elt.position,elt.phoneNo,elt.email,elt.address,elt.branch]);
    

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("employeereport.pdf")
  }

  //end 

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
      <div className="IT19197760-down-link-link">
      <center>
    
    <button onClick={() => this.exportPDF()}>Generate Report</button>
    </center>
    </div>
    </div>);
  }
}