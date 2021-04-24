import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import VehicleTableRaw from './VehicleTableRaw';
import '../../css/it19142456.css';

import { Link } from "react-router-dom";
export default class VehicleList  extends Component {

  constructor(props) {
    super(props)
    this.state = {
      salaries: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/vehicles/')
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
      return <VehicleTableRaw obj={res} key={i} />;
    });
  }

  render() {
    return (<div className="table-wrapper">
      <br/>
      <h2 className="it19142456-heading">Vehicle details</h2>
      <br/>
      <center>
      <Link to={"/create-vehicle"} className="it1914256-add-link">
              Add vehicle details
              </Link>
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
              <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {this.DataTable()}
      </tbody>
    </Table>
  </div>
     
    );
  }
}