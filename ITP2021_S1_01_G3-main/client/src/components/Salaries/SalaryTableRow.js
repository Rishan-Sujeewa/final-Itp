import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import '../../css/IT19167060.css';

export default class SalaryTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteSalary = this.deleteSalary.bind(this);
    }

    deleteSalary() {
        axios.delete('http://localhost:5000/salaries/delete-salary/' + this.props.obj._id)
            .then((res) => {
                console.log('Salary Details successfully deleted!')
                window.location.href=window.location.href;
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.salaryID}</td>
                <td>{this.props.obj.fname}</td>
                <td>{this.props.obj.lname}</td>
                <td>{this.props.obj.designation}</td>
                <td>{this.props.obj.date}</td>
                <td>{this.props.obj.workHours}</td>
                <td>{this.props.obj.hourlyRate}</td>
                <td>{this.props.obj.incentive}</td>
                <td>{this.props.obj.deduction}</td>
                <td>{this.props.obj.totalSalary}</td>
                <td>
                    <Link className="IT19167060-edit-link" to={"/edit-salary/" + this.props.obj._id}>
                        Update
                    </Link>
                    <Button className="IT19167060-del-link" onClick={this.deleteSalary} size="sm">Delete</Button>
                
                </td>
            </tr>
        );
    }
}