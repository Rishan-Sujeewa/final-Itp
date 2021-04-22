import React, { useState } from "react"
import axios from "axios";

export default function AddSalaryDetails(){

    const [salaryID, setSalaryID] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [designation, setDesignation] = useState("");
    const [date, setDate] = useState("");
    const [workHours, setWorkHours] = useState("");
    const [hourlyRate, setHourlyRate] = useState("");
    const [incentive, setIncentive] = useState("");
    const [deduction, setDeduction] = useState("");
    const [totalSalary, setTotalSalary] = useState("");

    function sendData(e){
        e.preventDefault();

        const newSalary = {
            salaryID,
            fname,
            lname,
            designation,
            date,
            workHours,
            hourlyRate,
            incentive,
            deduction,
            totalSalary
        }

        axios.post("http://localhost:5000/salary/add",newSalary).then(()=>{
            alert("Salary details added")
            setSalaryID("");
            setFname("");
            setLname("");
            setDesignation("");
            setDate("");
            setWorkHours("");
            setHourlyRate("");
            setIncentive("");
            setDeduction("");
            setTotalSalary("");
        }).catch((err)=>{
            alert(err)
        })
    }


    return(
        <div className = "container">
        <div style= {{marginTop:40}} className = "container">
        <center><h2 style= {{color:"#828282" , marginBottom:20}}>Enter new salary details</h2></center>
        <form onSubmit={sendData} className="form-wrapper">
            <div class="form-group">
                <label for="salaryID">Employee SalaryID</label>
                <input type="text" class="form-control" id="salaryID" placeholder="Enter SalaryID" 
                onChange = {(e)=>{
                    setSalaryID(e.target.value)
                }} />   
            </div>
            
            <div class="form-group">
                <label for="fname">First Name</label>
                <input type="text" class="form-control" id="fname" placeholder="Enter First Name"
                onChange = {(e)=>{
                    setFname(e.target.value)
                }}/>   
            </div>

            <div class="form-group">
                <label for="lname">Last Name</label>
                <input type="text" class="form-control" id="lname" placeholder="Enter Last Name"
                onChange = {(e)=>{
                    setLname(e.target.value)
                }}/>   
            </div>

            <div class="form-group">
                <label for="designation">Designation</label>
                <input type="text" class="form-control" id="designation" placeholder="Enter Designation"
                onChange = {(e)=>{
                    setDesignation(e.target.value)
                }}/>   
            </div>

            <div class="form-group">
                <label for="date">Date</label>
                <input type="date" class="form-control" id="date" placeholder="date"
                onChange = {(e)=>{
                    setDate(e.target.value)
                }}/>   
            </div>

            <div class="form-group">
                <label for="workHours">Work Hours</label>
                <input type="number" class="form-control" id="workHours" placeholder="Enter Work Hours"
                onChange = {(e)=>{
                    setWorkHours(e.target.value)
                }}/>   
            </div>

            <div class="form-group">
                <label for="hourlyRate">Hourly Rate</label>
                <input type="number" class="form-control" id="hourlyRate" placeholder="Enter Hourly Rate"
                onChange = {(e)=>{
                    setHourlyRate(e.target.value)
                }}/>   
            </div>

            <div class="form-group">
                <label for="incentive">Incentive (Rs)</label>
                <input type="number" class="form-control" id="incentive" placeholder="Enter Incentive"
                onChange = {(e)=>{
                    setIncentive(e.target.value)
                }}/>   
            </div>

            <div class="form-group">
                <label for="deduction">Deduction (Rs)</label>
                <input type="number" class="form-control" id="deduction" placeholder="Enter Deduction"
                onChange = {(e)=>{
                    setDeduction(e.target.value)
                }}/>   
            </div>

            <div class="form-group">
                <label for="totalSalary">Total Salary (Rs)</label>
                <input type="number" class="form-control" id="totalSalary" placeholder="Enter Total Salary"
                onChange = {(e)=>{
                    setTotalSalary(e.target.value)
                }}/>   
            </div>

            <button type="submit" class="btn btn-primary" style= {{backgroundColor:"#828282", borderColor:"#828282",marginBottom:50}}>
            Create</button>
        
        </form>
        </div>
        </div>
    )
}