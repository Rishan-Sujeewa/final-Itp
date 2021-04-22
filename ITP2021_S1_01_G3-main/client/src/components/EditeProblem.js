import axios from 'axios';
import React, { Component } from 'react';
import '../css/IT19197760.css';
import Header from './eHeader';





export default class editProblem extends Component {

  constructor(props) {
    super(props);
    this.state={
      EmployeeId: '',
      ProblemTheyHave: '',
      Solution: '',
    
    }
  }

  handleInputChange = (e) =>{
      const {name,value} =e.target;

      this.setState({

        ...this.state,
        [name]:value


      })



  }

  onsubmit = (e) =>{

    e.preventDefault();
    const id = this.props.match.params.id;

    const {EmployeeId, ProblemTheyHave,Solution} = this.state;

    const data ={
      EmployeeId: EmployeeId,
      ProblemTheyHave:ProblemTheyHave,
      Solution :Solution,


    }
  
    console.log(data)

    axios.put('http://localhost:5000/employee/editProblem/',data).then((res)=>{

    if(res.data.success){
      alert("Updated sucsessfully")
      this.setState(
        {

          EmployeeId: "",
          ProblemTheyHave: "",
          Solution: "",
         
        }
      )
    }
      });

  }
    

//
  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get('http://localhost:5000/EmployeeProblem/').then((res) => {
        if(res.data.success){
          this.setState({
            EmployeeId:res.data.post.EmployeeId,
            ProblemTheyHave:res.data.post.ProblemTheyHave,
            Solution:res.data.post.Solution,
         


          });

          console.log(this.state.post);

        }



    });
  }



  render(){

    return(
      <div className ="container">
        < Header />

        <h1 style={{marginLeft : 500 ,fontSize: 25, }}> Update Employee Problem</h1>
      <form >
<div class="form-group" style={{marginLeft : 20}}>
  <label for="eid">Employee Id</label>
  <input type="text" class="form-control" id="eid"  placeholder="Enter Employee Id" >
 
  </input>

</div>
<div class="form-group" style={{marginLeft : 20}}>
<label for="fName">Problem employee has</label>
  <input type="text" class="form-control" id="fName"  placeholder="Enter Problem" >

  

  </input>

</div>
<div class="form-check">
<label for="Lname">Solution</label>
  <input type="text" class="form-control" id="Solution"  placeholder="Enter Solution" >

  </input>

</div>



<button type="submit" class="btn btn-primary"  style={{marginLeft:200}} >Update</button>
</form>

</div>

  )

  
}
}