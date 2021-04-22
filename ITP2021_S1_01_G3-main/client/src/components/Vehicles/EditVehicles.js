import React from 'react';
import axios from 'axios';

export default class EditVehicles extends React.Component{

constructor(props){
        super(props);

this.state={

        vehicleId:"",
        registrationNum:"",
        type:"",
        brandName:"",
        year:"",
        model:"",
        capasity:"",
        chassiNumber:"",
        engineNumber:"",
        adminId:"",
        licenseNo:"",
        branchId:""

        }

}
handleInputChange=(e)=>{
        const{name,value}=e.target;


        this.setState({
                ...this.state,
                [name]:value
        })


}
onSubmit=(e)=>{


        e.preventDefault();
        const id=this.props.match.params.id;
        
        const{vehicleId,registrationNum,type,brandName,year,model,capasity,chassiNumber,engineNumber,adminId,licenseNo,branchId}=this.state;

        const data={
        vehicleId:vehicleId,
        registrationNum:registrationNum,
        type: type,
        brandName:brandName,
        year:year,
        model: model,
        capasity:capasity,
        chassiNumber:chassiNumber,
        engineNumber: engineNumber,
        adminId:adminId,
        licenseNo:licenseNo,
        branchId:branchId

        }
      
        console.log(data)

        axios.put(`http://localhost:5000/vehicle/update/${id}`,data).then((res)=>{
                 alert("Vehicle update Susccessfully")
                 this.setState({
                        vehicleId:"",
                        registrationNum:"",
                        type:"",
                        brandName:"",
                        year:"",
                        model:"",
                        capasity:"",
                        chassiNumber:"",
                        engineNumber:"",
                        adminId:"",
                        licenseNo:"",
                        branchId:""   


                 })               






        })
}
        
        componentDidMount(){
                const id=this.props.match.params.id;
        
                axios.get(`http://localhost:5000/vehicle/get/${id}`).then((res)=>{
        
                        this.setState({
                        vehicleId:res.data.posts.vehicleId,
                        registrationNum:res.data.post.registrationNum,
                        type:res.data.post.type,
                        brandName:res.data.post.brandName,
                        year:res.data.post.year,
                        model:res.data.post.model,
                        capasity:res.data.post.capasity,
                        chassiNumber:res.data.post.chassiNumber,
                        engineNumber:res.data.post.engineNumber,
                        adminId:res.data.post.adminId,
                        licenseNo:res.data.post.licenseNo,
                        branchId:res.data.post.branchId
                        });
                        console.log(this.state.post);
        
                }); 
        

        }
        
        render(){
        return(

                <div>
                <form className="container" style={{textAlign:'center',borderradius:5,width:600,border:'inset',borderBlockColor:'#ccc',backgroundcolor:'#f1f1f1'}}>

                <div className="vehicleId" required="required">
                <h2>Edit Vehicles</h2> 
                <label for="vehicleIdla"className="vehicleIdlala" >1)Vehicle Id:</label>
                <input type="text" className="vehicleIdIn" name="vehicleId" id="vehicleIdId" placeholder="vehicle Id" required="required" style={{width: '80%',padding: '6px 10px', margin: '8px 0',
                display: 'inline-block',
                border: '1px solid #ccc',
                borderradius: '4px',
                boxsizing: 'border-box'
                }}  value={this.state.adminId} onChange={this.handleInputChange}/>
                
                </div>
                <br/>
                <div className="regNum"> 
                <label for="regNumla" className="regNumlala" >2)Registration Number:</label>
                        <input type="text" className="regIn" name="registrationNum" id="regId" placeholder="Registration number" required="required" style={{width: '65%',padding: '6px 10px', margin: '8px 0',
                display: 'inline-block',
                border: '1px solid #ccc',
                borderradius: '4px',
                boxsizing: 'border-box'
                 }} value={this.state.registrationNum} onChange={this.handleInputChange}/>
                </div>
                <br/>
                <div className="capasity"> 
                <label for="capla" className="caplala" >3)Capasity:</label>
                <input type="text" className="capIn" name="capasity" id="capId" placeholder="Capasity" style={{width: '80%',padding: '6px 10px', margin: '8px 0',
                display: 'inline-block',
                border: '1px solid #ccc',
                borderradius: '4px',
                boxsizing: 'border-box'
                }} value={this.state.capasity} onChange={this.handleInputChange}/>
                </div>
                <br/>
                <div className="model">
                <label for="modella" className="modellala">4)Select Model:</label>
                <select id="modelId" className="model" name="model" placeholder="model" style={{width: '75%',padding: '6px 10px', margin: '8px 0',
                display: 'inline-block',
                border: '1px solid #ccc',
                borderradius: '4px',
                boxsizing: 'border-box'
                }} value={this.state.model} onChange={this.handleInputChange}>
                <option>Toyota</option>
                <option>Nisan</option>
                <option>Mitsubishi</option>
                <option>TATA</option>
                <option>Layland</option>
                <option>Daihatsu</option>
                <option>Mahindra</option>
                <option>Volvo</option>
                </select>
                </div>
                <br/>
                <div className="brandName">
                <label for="brandla" className="brandlala">5)Select Brand:</label>
                <select id="brandId" className="brand" name="brandName" style={{width: '75%',padding: '6px 10px', margin: '8px 0',
                display: 'inline-block',
                border: '1px solid #ccc',
                borderradius: '4px',
                boxsizing: 'border-box'
                }} value={this.state.brandName} onChange={this.handleInputChange}>
                <option>Canter</option>
                <option>Hino</option>
                <option>Fuso</option>
                <option>Freightliner Trucks</option>
                <option>Caterpillar</option>
                <option>Kenworth</option>
                <option>DAF Truck</option>
                <option>Kenworth</option>
                </select>
                </div>
                <br/>
                <div className="type"> 
                <label for="typla" className="typlala" >6)Type:</label>
                <input type="text" className="typIn" name="type" id="typId" placeholder="Type" style={{width: '85%',padding: '6px 10px', margin: '8px 0',
                display: 'inline-block',
                border: '1px solid #ccc',
                borderradius: '4px',
                boxsizing: 'border-box'
                }} value={this.state.type} onChange={this.handleInputChange}/>
                </div>
                <br/>
                <div className="manufectureYear"> 
                <label for="manula" className="manulala" >7)Manufecture Year:</label>
                <input type="date" className="manuIn" name="year" id="manuId" placeholder="Manufacture Year"  style={{width: '70%',padding: '6px 10px', margin: '8px 0',
                display: 'inline-block',
                border: '1px solid #ccc',
                borderradius: '4px',
                boxsizing: 'border-box'
                }} value={this.state.year} onChange={this.handleInputChange}/>
                </div>
                <br/>
                <div className="engineNum"> 
                <label for="engila" className="engilala" >8)Engine Number:</label>
                <input type="text" className="engiIn" name="engineNumber" id="engiId" placeholder="Engine Number" style={{width: '73%',padding: '6px 10px', margin: '8px 0',
                display: 'inline-block',
                border: '1px solid #ccc',
                borderradius: '4px',
                boxsizing: 'border-box'
                }} value={this.state.engineNumber} onChange={this.handleInputChange}/>
                </div>
                <br/>
                <div className="chassiNum"> 
                <label for="chasila" className="chasilala" >9)chassi Number:</label>
                <input type="text" className="chassiIn"  name="chassiNumber" id="chassiId" placeholder="Chassi Number" style={{width: '74%',padding: '6px 10px', margin: '8px 0',
                display: 'inline-block',
                border: '1px solid #ccc',
                borderradius: '4px',
                boxsizing: 'border-box'
                }} value={this.state.chassiNumber} onChange={this.handleInputChange}/>
                </div>
                <br/>

                <div className="adminId"> 
                <label for="adminla" className="adminlala" >10)Admin Id:</label>
                <input type="text" className="adminIn" name="adminId" id="adminIdId" placeholder="Admin Id" required="required" style={{width: '81%',padding: '6px 10px', margin: '8px 0',
                display: 'inline-block',
                border: '1px solid #ccc',
                borderradius: '4px',
                boxsizing: 'border-box'
                }} value={this.state.adminId} onChange={this.handleInputChange}/>
                </div>
                <br/>

                <div className="licenseNo"> 
                <label for="licensela" className="licencelala" >11)license Number:</label>
                <input type="text" className="licenseIn" name="licenseNo" id="licenseId" placeholder="License Number" required="required" style={{width: '72%',padding: '6px 10px', margin: '8px 0',
                display: 'inline-block',
                border: '1px solid #ccc',
                borderradius: '4px',
                boxsizing: 'border-box'
                }} value={this.state.licenseNo} onChange={this.handleInputChange}/>
                </div>
                <br/>

                <div className="branchId"> 
                <label for="branchla" className="branchlala" >12)Branch Id:</label>
                <input type="text" className="branchIn" name="branchId" id="branchId" placeholder="Branch Id" style={{width: '80%',padding: '6px 10px', margin: '8px 0',
                display: 'inline-block',
                border: '1px solid #ccc',
                borderradius: '4px',
                boxsizing: 'border-box'
                }} value={this.state.brandName} onChange={this.handleInputChange}/>
                </div>
                <br/>
                <button type="submit" className="SubmitAdd" className="SubmitAdd"  class="btn btn-primary btn-lg btn-block" style={{color:'#000000',backgroundColor:'#D3D3D3'}}>Update</button>

                </form>  

                        

                </div>



        )

}

}