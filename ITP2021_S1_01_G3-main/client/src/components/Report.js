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

    render(){
        return(
            <div>

            
                <div>
                   
                
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
                                    </tr>

                            ))}
                        </tbody>

                    </table>
                    <button className="btn btn-success" style={{marginLeft:'5%',color:'#000000',backgroundColor:'#D3D3D3'}}><a href="/report"  style={{textDecoration:'none',color:'#000000',}}>Download</a></button>

                </div>

            

            </div>

        )
    }






}