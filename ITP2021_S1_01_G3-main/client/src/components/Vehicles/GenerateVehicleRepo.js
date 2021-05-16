import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import GenerateVehicleTableRow from './GenerateVehicleTableRow';
import {jsPDF} from 'jspdf'
import 'jspdf-autotable'
import '../../css/it19142456.css';

export default class GenerateVehicleRepo extends Component {
  
 

  constructor(props) {
    super(props)
    this.state = {
      vehicle: []
    };
  }
//create pdf
  exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Vehicle details";
    const headers = [['Vehicle_ID','Reg_Number','BrandName', 'ManufacYear', 'Model', 'Capasity','ChaNumber','EnNumber','AdminNum','LicessNum','BranchId']];

    const data = this.state.vehicle.map(elt=> [elt.vehicleId, elt.registrationNum, elt.type, elt.brandName, elt.year, elt.model
      , elt.capasity, elt.chassiNumber, elt.engineNumber, elt.adminId,elt.licenseNo,elt.branchId]);
    

    let content = {
      startY: 27,
      head: headers,
      body: data,
      theme : 'grid',
      styles: {halign:'center'},
      headStyles:{fillColor:[71, 201, 76]},
        
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("Vehicle.pdf")
  }
//end

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

  DataTable() {
    return this.state.vehicle.map((res, i) => {
      return <GenerateVehicleTableRow obj={res} key={i} />;
    });
  }

 //send data   
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