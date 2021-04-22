import React,{useState} from "react"
import axios from "axios";
import '../css/IT19197760.css';
import Header from './eHeader';


export default function Addemployee(){

    const [EmployeeId ,setEmployeeId] = useState("");
    const [ProblemTheyHave ,setProblemTheyHave] = useState("");
    const [Solution ,setSolution] = useState("");
    

    function sendData(e){  
        e.preventDefault();

        alert("Insert");

        const newEmployee ={

            EmployeeId,
            ProblemTheyHave,
            Solution,
           
 
        }

        axios.post("http://localhost:5000/employeeProblem/addC",newEmployee).then(()=>{

        alert("Employee Added")

        setEmployeeId("");
        ProblemTheyHave("");
        Solution("");
       

        }).catch((err)=>{
            alert(err)
        })

        
    }



    return(
      <div>
      < Header />

      <div className ="text2" >

        <h1 style={{marginLeft : 500 ,fontSize: 25, }}> Add Employee Problem</h1>
      
        <div className ="container">
        <form onSubmit={sendData}>
  <div  class="form-group" style={{marginLeft : 20}}>
    <label for="eid">Employee Id</label>
    <input type="text" class="form-control" id="eid"  placeholder="Enter Employee Id" onChange = {(event)=>{

        setEmployeeId(event.target.value);

    }}></input>
  
  </div>
  <div class="form-group"style={{marginLeft : 20}}>
  <label for="ProblemTheyHave">ProblemTheyHave</label>
    <input type="text" class="form-control" id="ProblemTheyHave"  placeholder="Enter ProblemTheyHave" onChange = {(event)=>{

    setProblemTheyHave(event.target.value);

    }}></input>
  
  </div>
  <div class="form-check">
  <label for="Solution">Solution</label>
    <input type="text" class="form-control" id="Solution"  placeholder="Enter Solution" onChange = {(event)=>{

setSolution(event.target.value);

    }   }></input>
  
  </div>

  
  <button type="submit" class="btn btn-primary" style={{marginLeft:200}}>ADD </button>
</form>

</div>
</div>
</div>

    )

        

    
   

    



}