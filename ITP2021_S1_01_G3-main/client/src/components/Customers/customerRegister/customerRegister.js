import React,{useState} from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import '../../../css/it19951386.css';
import Header from '../../constructions/header'

export default function CustomerRegister(props) {

    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");
    const [pNo, setpNo] = useState("");
    const [password, setpassword] = useState("");
    const [repassword, setrepassword] = useState("");
    const [errors, seterrors] = useState([]);
    const [emailerror, setemailerror] = useState("");
   
    const customerFormSubmit = async(e) => {
        e.preventDefault();
        setemailerror("")
        seterrors([]);

        document.getElementById("passwordError").innerText = ""

        if(password != repassword){
            setpassword("");
            setrepassword("");
            document.getElementById("passwordError").innerText = "Password and Re-type Password fields Doesn't Match!"
            return;
        }

        const response = await axios.post('http://localhost:5000/customer/register', {fname, lname, email, password,address,pNo})
        if(response.data.errors){
            setpassword("");
            setrepassword("");
            seterrors(response.data.errors);
        }
        if(response.data.success){
            localStorage.setItem('regMsg', "You have successfully registered! Please login to continue");
            window.location = '/customer/login';
        }
        if(response.data.emailerror){
            setemailerror(response.data.emailerror);
            setpassword("");
            setrepassword("");
        }  
    }

    return (
        <div>
            <Header/>
            <form onSubmit={customerFormSubmit} className="form-group it19951386-myForm">
                <h2>Customer Register Form</h2>
                {errors ? errors.map((error) => {
                    return (
                        <div class="alert alert-danger" role="alert">
                            {error.msg}
                      </div>
                    )
                }):null}
                {emailerror ? 
                <div class="alert alert-danger" role="alert">
                    {emailerror}
                    </div>: null}
                <label>First Name</label>
                <input type="text" className="form-control" name="fname" onChange={(e) => {setfname(e.target.value);}} value={fname} /><br/>
                <label>Last Name</label>
                <input type="text" className="form-control" name="lname" onChange={(e) => {setlname(e.target.value);}} value={lname}/><br/>
                <label>Email</label>
                <input type="email" className="form-control" name="email" onChange={(e) => {setemail(e.target.value);}} value={email}/><br/>
                <label>Address</label>
                <input type="text" className="form-control" name="address" onChange={(e) => {setaddress(e.target.value);}} value={address}/><br/>
                <label>Phone No</label>
                <input type="text" className="form-control" name="pNo" onChange={(e) => {setpNo(e.target.value);}} value={pNo}/><br/>
                <label>Password</label>
                <input type="password" className="form-control" name = "password" onChange={(e) => {setpassword(e.target.value);}} value={password}/><br/>
                <label>Re-type Password</label>
                <div><span id="passwordError" style={{color:'red'}}></span></div>
                <input className="form-control" type="password" name = "repassword" onChange={(e) => {setrepassword(e.target.value);}} value={repassword}/>
                <p className="it19951386-centerDiv" style={{marginTop:'20px'}}>Already have an account? <Link className="it19951386-link" to="/customer/login"> Login here</Link></p>
                <div className="it19951386-centerDiv"><input type="submit" value="Register" className="btn it19951386-green-btn it19951386-mybtn "/></div><br/>
            </form>
        </div>
    )
}
