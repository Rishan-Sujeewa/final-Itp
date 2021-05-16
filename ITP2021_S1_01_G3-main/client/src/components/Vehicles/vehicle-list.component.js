import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import VehicleTableRaw from './VehicleTableRaw';
import Admin_dash from '../Admin_dash/home';
import '../../css/it19142456.css';
import { Link } from "react-router-dom";

export default class VehicleList  extends Component {

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
  fetch('http://localhost:5000/vehicles/')
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
          console.log( l.vehicleId.toLowerCase().match(searchString));
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
     vehicle:[]
    };
  }
 

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

    let dataToShow = this.state.vehicle;
    let searchQuery = this.state.searchQuery;

    console.log(searchQuery);

   if(searchQuery){
    dataToShow = dataToShow.filter(data => {

      console.log(data.vehicleId); 
      return data.vehicleId.includes(searchQuery)
          || data.registrationNum.includes(searchQuery)
    });
   }

   console.log(dataToShow);

    return dataToShow.map((res, i) => {
      return <VehicleTableRaw obj={res} key={i} />;
    });
  }
 
  
  

  render() {
    return (
      <div>

      <Admin_dash/>
  
      <h2 className="it19142456-heading">Vehicle details </h2>
    <div className="table-wrapper">
    <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            </div>
            <div className="col-lg-3 mt-2 mb-2 ">
              <input
              className="form-control"
              type="search"
              placeholder="Search by Vehicle Id or Registration Number"
              name="searchQuery"
              onChange={(event) => {
                this.setState({
                  searchQuery: event.target.value
                })
            }}></input>
            </div>
        </div>
       
        
      <center>
      <Link to={"/create-vehicle"} className="it1914256-add-link">
              +Add vehicle details
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
    <center>
    <Link to={"/generate-vehicle"} className="it1914256-report-link">
       Generate Reports
    </Link>
    </center>
  </div>
     </div>
    );
  }
}