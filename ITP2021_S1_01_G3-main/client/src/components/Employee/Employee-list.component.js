import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import EmployeeTableRow from './EmployeeTableRow';
import '../../css/it19197760.css';
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Admin_dash from "../Admin_dash/home";


export default class EmployeeList extends Component {

//search

state = {
  searchQuery : '',
  query: '',
  data: [],
}

handleInputChange = () => {
  this.setState({
      query: this.search.value
  })
  this.filterArray();
}

getData = () => {
  fetch('http://localhost:5000/Employee/')
  .then(response => response.json())
  .then(responseData => {
      // console.log(responseData)
      this.setState({
          data:responseData
      })
  })
}

filterArray = () => {
  var searchString = this.state.query;
  var responseData = this.state.data
  if(searchString.length > 0){
      // console.log(responseData[i].name);
      responseData = responseData.filter(l => {
          console.log( l.FirstName.toLowerCase().match(searchString));
      })
  }
}

componentWillMount() {
  this.getData();
}


//



  constructor(props) {
    super(props)
    this.state = {
      Employee: []
    };
  }
  


  // PDF download 

  exportPDF = () => {
    

    const doc = new jsPDF({orientation:"portrait"});

    doc.setFontSize(15);

    
    const headers = [["EmployeeId", "Firstname","Last name","NIC","Position","phone Number ","Email ","Address","Branch"]];

    const data = this.state.Employee.map(elt=> [elt.EmployeeId,elt.FirstName,elt.LastName,elt.NIC,elt.position,elt.phoneNo,elt.email,elt.address,elt.branch]);
    

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
    doc.text(`Employees Details Report`, 105, 13, null, null, "center");
    doc.setFontSize(10);
    doc.text(`(Generated on ${time})`, 105, 17, null, null, "center");
    doc.setFontSize(12);
    doc.text("Thilina Hardware - No 55, Main Road, Horana", 105, 22, null, null, "center");
    doc.autoTable(content);
    doc.save("EmployeeReport.pdf")
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

//search

  DataTable() {

    let dataToShow = this.state.Employee;
    let searchQuery = this.state.searchQuery;

    console.log(searchQuery);

   if(searchQuery){
    dataToShow = dataToShow.filter(data => {

      console.log(data.FirstName); 
      return data.FirstName.includes(searchQuery)
          || data.EmployeeId.includes(searchQuery)
    });
   }

   console.log(dataToShow);

    return dataToShow.map((res, i) => {
      return <EmployeeTableRow obj={res} key={i} />;
    });
  }

  //

  render() {

    return (<div className="table-wrapper">

      <div>
    <Admin_dash/>


     

<h2 className ="it19197760-head">EMPLOYEE LIST</h2>

    <br></br>
        <center>
        <Link to={'/create-Employee'} className ="it19197760-add-link">
          
        + Add Employee
        </Link>
      </center>

      

      <center>

        <input type="text"
        className="IT19197760-search"
        placeholder="Search"
        onChange={(event) => {
            this.setState({
              searchQuery: event.target.value

            })

        }} />

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
      
      <center>
    
    <button  className="IT19197760-down-link-link" onClick={() => this.exportPDF()}>Generate Report</button>
    </center>
    </div>

    </div>);
    
  }
}