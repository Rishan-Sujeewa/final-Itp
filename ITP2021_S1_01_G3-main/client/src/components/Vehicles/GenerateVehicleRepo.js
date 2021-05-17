import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import GenerateVehicleTableRow from './GenerateVehicleTableRow';
import {jsPDF} from 'jspdf'
import 'jspdf-autotable'
import '../../css/it19142456.css';

export default class GenerateVehicleRepo extends Component {
  
 
//OOp constructer
  constructor(props) {
    super(props)
    this.state = {
      vehicle: []
    };
  }
//create pdf
  exportPDF = () => {
 
    const doc = new jsPDF({orientation:"portrait"});
    doc.setFontSize(15);
    const headers = [['Vehicle_ID','Reg_Number','BrandName', 'ManufacYear', 'Model', 'Capasity','ChaNumber','EnNumber','AdminNum','LicessNum','BranchId']];

    const data = this.state.vehicle.map(elt=> [elt.vehicleId, elt.registrationNum, elt.type, elt.brandName, elt.year, elt.model
      , elt.capasity, elt.chassiNumber, elt.engineNumber, elt.adminId,elt.licenseNo,elt.branchId]);
    
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
    doc.text(`Vehicle Details Report`, 105, 13, null, null, "center");
    doc.setFontSize(10);
    doc.text(`(Generated on ${time})`, 105, 17, null, null, "center");
    doc.setFontSize(12);
    doc.text("Thilina Hardware - No 55, Main Road, Horana", 105, 22, null, null, "center");
    doc.autoTable(content);
    doc.save("VehicleReport.pdf")
  }
//end pdf


//Dispaly data
  componentDidMount() {
    axios.get('http://localhost:5000/vehicles/')
      .then(res => {
          console.log(res.data)
        this.setState({
          vehicle: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

//Fetching data as table
  DataTable() {
    return this.state.vehicle.map((res, i) => {
      return <GenerateVehicleTableRow obj={res} key={i} />;
    });
  }

    //Form 
  render() {
    return (<div className="table-wrapper">
      <br/>
      <h2 className="it19142456-heading">Vehicle details Report</h2>
      <br/>
      <center>
      
      </center>
      

    <Table striped bordered hover className= "it19142456-displayTable">
      <thead>
        <tr>
              <th>VehicleId</th>
              <th>RegistrationNum</th>
              <th>type</th>
              <th>Brand Name</th>
              <th>Manufact Year</th>
              <th>Model</th>
              <th>Capasity</th>
              <th>Chassi Number</th>
              <th>Engine Number</th>
              <th>Admin Id</th>
              <th>License Number</th>
              <th>Branch Id</th>
              
        </tr>
      </thead>
      <tbody>
        {this.DataTable()}
      </tbody>
    </Table>
    <center>
        <button  onClick={()=>this.exportPDF()} className="it1914256-download-link">Download</button>
        </center>
  </div>
     
    );
  }
}