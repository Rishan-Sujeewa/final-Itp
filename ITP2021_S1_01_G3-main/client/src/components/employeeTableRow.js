import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../css/IT19197760.css';
import Header from './eHeader';

export default class employeeTableRow extends Component {
    render() {

        
        return (
            <div> < Header />
            
            <tr>
                <td>{this.props.obj.EmployeeId}</td>
                <td>{this.props.obj.FirstName}</td>
                <td>{this.props.obj.LastName}</td>
                <td>{this.props.obj.NIC}</td>
                <td>{this.props.obj.position}</td>
                <td>{this.props.obj.phoneNo}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.address}</td>
                <td>{this.props.obj.branch}</td>
                
                <td>
                    <Link className="edit-link" to={"/edit-employee/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
            </div>
        );
    }
}