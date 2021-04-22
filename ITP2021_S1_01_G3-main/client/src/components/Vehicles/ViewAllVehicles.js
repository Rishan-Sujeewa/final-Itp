import React from 'react';
import axios from 'axios';


export default class ViewAllVehicles extends React.Component{
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
     axios.get("http://localhost:5000/vehicle/").then(res=>{
         this.setState({
             posts:res.data
         });
         console.log(this.state.posts)
     })
     


 }
 onDelete=(vId)=>{
    axios.delete("").then((res)=>{
        alert("delete succrssfully");
        this.retrivePost();

    })

 }
    render(){
        return(
            <div>

            
                <div>
                   
                 <button className="btn btn-success" style={{marginLeft:'16%',color:'#000000',backgroundColor:'#D3D3D3'}}><a href="/vehicle/add"  style={{textDecoration:'none',color:'#000000',}} >Add NewVehicle</a></button>
                 <button className="btn btn-success" style={{marginLeft:'5%',color:'#000000',backgroundColor:'#D3D3D3'}}><a href="/vehicle/report"  style={{textDecoration:'none',color:'#000000',}}>Download</a></button>
                 

                    <table className="table" style={{width:'85%',height:'70%',float:'right',marginTop:30,marginLeft:'20%'}}>
                        <thead>
                            <th scope="col" style={{width:20}}>#</th>
                            <th scope="col">AdminId</th>
                            <th scope="col">BranchId</th>
                            <th scope="col">BrandName</th>
                            <th scope="col">Capasity</th>
                            <th scope="col">Chassi Number</th>
                            <th scope="col">Engine Number</th>
                            <th scope="col">License Number</th>
                            <th scope="col">Model</th>
                            <th scope="col">Registration Num</th>
                            <th scope="col">Type</th>
                            <th scope="col">VehicleId</th>
                            <th scope="col">Year</th>
                            <th scope="col">Action</th>


                        </thead>
                        <tbody>
                            {this.state.posts.map((posts,index)=>(
                                    <tr>
                                        <th scope="row">{index+1}</th>
                                        <td>{posts.vehicleId}</td>
                                        <td>{posts.branchId}</td>
                                        <td>{posts.brandName}</td>
                                        <td>{posts.capasity}</td>
                                        <td>{posts.chassiNumber}</td>
                                        <td>{posts.engineNumber}</td>
                                        <td>{posts.licenseNo}</td>
                                        <td>{posts.model}</td>
                                        <td>{posts.registrationNum}</td>
                                        <td>{posts.type}</td>
                                        <td>{posts.vehicleId}</td>
                                        <td>{posts.year}</td>
                                        <td>
                                            <a className="btn" style={{color:'#000000',backgroundColor:'#D3D3D3'}} href={`/vehicle/update/${posts.id}`}>
                                                <i className="fas fa-edit"></i>&nbsp;Edit
                                             </a>   
                                        </td>
                                        &nbsp;
                                        <td>
                                            <a className="btn" style={{color:'#000000',backgroundColor:'#D3D3D3'}} href="#" onClick={()=>this.onDelete(posts.vId)}>
                                                <i className="far fa-trash-alt"></i>&nbsp;Delete
                                             </a>   
                                        </td>

                                    </tr>






                            ))}
                        </tbody>

                    </table>

                </div>

            

            </div>

        )
    }






}