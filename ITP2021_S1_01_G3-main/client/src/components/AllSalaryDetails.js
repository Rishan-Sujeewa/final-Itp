import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class AllSalaryDetails extends React.Component{
    constructor(props){
        super(props);
    this.state={
        posts:[]
    };
    }

    componentDidMount(){
        this.retrivePost();
    }


retrivePost(){
    axios.get("http://localhost:5000/salary/").then(res=>{
        this.setState({
            posts:res.data
        });
        console.log(this.state.posts)
    })
}

render(){
    return(
        <div className="container" style= {{marginLeft:100}}>
            
            <div >
            <h2 style= {{color:"#828282",marginTop:40 ,marginLeft:100}}>Employee Salary Details</h2>
            
            <Link className="add-link" to={"/salary/add/"}>
                    + Add Salary Details
            </Link>
            
             
                <table style= {{marginTop:30}} className="table">
                    <thead>
                        <th scope="col">#</th>
                        <th scope="col">SalaryID</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Designation</th>
                        <th style= {{paddingLeft:40,paddingRight:40}} scope="col">Date</th>
                        <th scope="col">WorkHours</th>
                        <th scope="col">HourlyRate</th>
                        <th scope="col">Incentive</th>
                        <th scope="col">Deduction</th>
                        <th scope="col">TotalSalary</th>
                        <th scope="col">Action</th>

                    </thead>
                    <tbody>
                        {this.state.posts.map((posts,index)=>(
                            <tr>
                                <th scope="row">{index+1}</th> 
                                <td>{posts.salaryID}</td>
                                <td>{posts.fname}</td>
                                <td>{posts.lname}</td>
                                <td>{posts.designation}</td>
                                <td align="center">{posts.date}</td>
                                <td align="center">{posts.workHours}</td>
                                <td align="center">{posts.hourlyRate}</td>
                                <td align="center">{posts.incentive}</td>
                                <td align="center">{posts.deduction}</td>
                                <td align="center">{posts.totalSalary}</td>
                                <td>

                                <Link to={"/salary/update"} className="edit-link">
                                    Edit
                                </Link>
                                </td>
                                
                                <td>
                                    <a className= "btn btn-danger" href="#">
                                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                                    </a>
                                </td>
                            </tr>
                        
                        ))}
                    </tbody>
                </table>
            </div>
            <center>
            <Link to={"/salary/generate"} className="repo-link" style={{marginBottom:50}}>
               Generate Reports
            </Link>
            </center>
        </div>
    )
}
}