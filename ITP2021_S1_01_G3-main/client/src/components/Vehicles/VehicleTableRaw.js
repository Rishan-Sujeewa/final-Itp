import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class VehicleTableRaw extends Component {

    constructor(props) {
        super(props);
        this.deleteVehicle = this.deleteVehicle.bind(this);
    }

    deleteVehicle() {
        axios.delete('http://localhost:5000/vehicles/delete-vehicle/' + this.props.obj._id)
            .then((res) => {
                console.log('Vehicle Details successfully deleted!')
                window.location.href=window.location.href;
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.vehicleId}</td>
                <td>{this.props.obj.registrationNum}</td>
                <td>{this.props.obj.type}</td>
                <td>{this.props.obj.brandName}</td>
                <td>{this.props.obj.year}</td>
                <td>{this.props.obj.model}</td>
                <td>{this.props.obj.capasity}</td>
                <td>{this.props.obj.chassiNumber}</td>
                <td>{this.props.obj.engineNumber}</td>
                <td>{this.props.obj.adminId}</td>
                <td>{this.props.obj.branchId}</td>
                
                <td>
                    <Link className="vehicle-edit-link" to={"/edit-vehicle/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteVehicle} size="sm">Delete</Button>
                
                </td>
            </tr>
        );
    }
}