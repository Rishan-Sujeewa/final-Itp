import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import '../../css/IT19197760.css'

export default class EmployeeTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee() {
        axios.delete('http://localhost:5000/Employee/delete-Employee/' + this.props.obj._id)
            .then((res) => {
                console.log('Employee Details successfully deleted!')
                window.location.href=window.location.href;
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
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
                    <Link className="btn it19197760-my-btn" to={"/edit-Employee/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteEmployee} size="sm"className="btn it19197760-my-btn">Delete</Button>
                
                </td>
            </tr>
        );
    }
}