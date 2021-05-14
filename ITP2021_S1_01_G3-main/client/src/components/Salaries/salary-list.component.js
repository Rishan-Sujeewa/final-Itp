import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import SalaryTableRow from './SalaryTableRow';
import jsPDF from "jspdf";
import "jspdf-autotable";
import '../../css/IT19167060.css';


export default class SalaryList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      salaries: []
    };
  }


  exportPDF = () => {
    //const unit = "pt";
    //const size = "A4"; // Use A1, A2, A3 or A4
    //const orientation = "portrait"; // portrait or landscape

    const doc = new jsPDF({orientation:"portrait"});
    


    //const marginLeft = 20;
    //const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    //const title = "Employee Salary Details";
    const headers = [["SalaryID", "First name","Last name","Designation","Date","Work Hours","Hourly Rate","Incentive","Deduction","Total Salary"]];

    const data = this.state.salaries.map(elt=> [elt.salaryID, elt.fname, elt.lname, elt.designation, elt.date, elt.workHours
      , elt.hourlyRate, elt.incentive, elt.deduction, elt.totalSalary]);
    

    let content = {
      theme : 'grid',
      styles: {halign:'center'},
      headStyles:{fillColor:[71, 201, 76]},
      startY: 27,
      head: headers,
      body: data
    };

    const time = new Date().toLocaleString();
    doc.setFontSize(27);
    doc.text(`Employee Salary Details Report`, 105, 13, null, null, "center");
    doc.setFontSize(10);
    doc.text(`(Generated on ${time})`, 105, 17, null, null, "center");
    doc.setFontSize(12);
    doc.text("Thilina Hardware - No 55, Main Road, Horana", 105, 22, null, null, "center");
    doc.autoTable(content);
    doc.save("SalaryReport.pdf")
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
    {/* <Link to={"/generate-salary"} className="IT19167060-down-link">
       Generate Reports
    </Link> */}
    <button className="IT19167060-repo-link" onClick={() => this.exportPDF()}>Generate Report</button>
    </center>
    </div>
    </div>);
    
  }
}