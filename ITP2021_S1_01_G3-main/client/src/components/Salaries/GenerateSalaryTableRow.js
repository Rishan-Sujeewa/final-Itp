import React, { Component } from 'react';
import '../../css/IT19167060.css';
import axios from 'axios';


export default class GenerateSalaryTableRow extends Component {

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
                
            </tr>
        );
    }
}