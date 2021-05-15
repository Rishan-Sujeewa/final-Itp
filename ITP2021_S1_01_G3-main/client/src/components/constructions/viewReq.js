import React, {Component} from "react";
import axios from "axios";
import './../../css/IT19140162.css';
import  HeaderCom from './header';
import jsPDF from 'jspdf';

class viewReq extends Component{

      constructor(props){
        super(props);
        //setting up state
        this.state={            
            design: ''
        }

    }

    // createPDF = () => {
    //     // const loading = document.getElementById('loading');
    //     // loading.style.display = "";//display loading icon
    //     // const dwnIcon = document.getElementById('dwn-icon');
    //     // dwnIcon.style.display = "none";//hide download icn

    //     // setTimeout(() => {  
    //     //     loading.style.display = "none";
    //     //     dwnIcon.style.display = "";
    //     // }, 1300);//display loading icon for 2 seconds  

    //     let bodyData = [];
    //     for(let i = 0; customers.length > i ; i++){
    //         bodyData.push([customers[i].cus_id,customers[i].fname,customers[i].lname, customers[i].email, customers[i].address, "0"+customers[i].pNo]);
    //     }//save json data to bodydata in order to print in the pdf table

    //     const doc = new jsPDF({orientation:"portrait"});
    //     var time = new Date().toLocaleString();
    //     doc.setFontSize(27);
    //     doc.text(`Customer Details Report`, 105, 13, null, null, "center");
    //     doc.setFontSize(10);
    //     doc.text(`(Generated on ${time})`, 105, 17, null, null, "center");
    //     doc.setFontSize(12);
    //     doc.text("Thilina Hardware - No 55, Main Road, Horana", 105, 22, null, null, "center");
    //     //doc.text("No 55, Main Road, Horana", 105, 30, null, null, "center"); 
    //     //doc.addImage(img, "JPEG",0,20);
    //     doc.autoTable({
    //         theme : 'grid',
    //         styles: {halign:'center'},
    //         headStyles:{fillColor:[71, 201, 76]},
    //         startY:27,
    //         head: [['Customer ID','Fname','Lname', 'Email', 'Address', 'Phone No']],
    //         body: bodyData
    //     })
    //     doc.save('CustomerReport.pdf');
    // }//report generation function

    
    createPDF = () =>{    

        const unit = "pt";
        const size = "A4"; //page size
        const orientation = "landscape";
        const marginLeft = 40;
        const doc = new jsPDF( orientation , unit , size ); //create document


        const title = `Construction Request - ${this.state.design._id}`;
        const headers = [["Customer Name", "Customer Email","Customer Contact No", "Plan Number", "Comments" ]];
               

        const data =  [
            this.state.design.name,
            this.state.design.email,
            this.state.design.phone,
            this.state.design.planNumber,
            this.state.design.otherComments
        ]
           

        
        let contents = {
            startY : 50,
            head : headers,
            body : data
        }

        doc.setFontSize( 20 );
        doc.text (title, marginLeft,40);
        require('jspdf-autotable');
        doc.autoTable(contents);
        doc.save ("Request.pdf")

    }



    //component eka load weddi awith thiyenna oni data danne mekata
    componentDidMount(){
        
        axios.get(`http://localhost:5000/systemizedReq/${this.props.match.params.id}`) 
            .then(res => {                
               this.setState({design:res.data.Systemized});
               console.log('data is retreived');
               console.log(res);
               
            }) 
            .catch((err)=>{
                console.log('error in fetching');
                console.log(err);
            })
       

    }

   
      render(){
        return(
        <div className="container"> 
        <HeaderCom/>
            <br/>
            <div className= "it19140162-sub1">
            <br/> <p className = "it19140162-topic1">Customer Requests</p><br/><br/><br/><br/><br/><br/></div>
                
            <div className = "it19140162-mainDiv">        
                
                <div className = "it19140162-sub3">
            
                    <div className="form-group"> <br/><br/>
                        
                    </div>
                    <div className = "it19140162-boarderd">
                        
                    </div>

                </div>  
                <div className = "it19140162-sub4">
                <br/><br/><br/>
                     <form className="shadow p-3 mb-5 bg-white rounded"  name = "it19140162-usereSystemizedReqForm" > 

                     <div className="form-group">

                        <h4><b></b></h4>

                     </div> 
                        
                     <div className="form-group">
                        <label for="it19140162-planNumber">Plan Number</label>
                        <input type="text" className="form-control" id="it19140162-planNumber"   name="planNumber" value={this.state.design.planNumber} readOnly/>
                    
                    </div>

                    <div className="form-group">
                        <label for="it19140162-name">Name</label>
                        <input type="text" className="form-control" id="it19140162-name" placeholder="Enter your name" name="Cname" value={this.state.design.name} readOnly
                        
                         />
                    
                    </div>

                    <div className="form-group">
                        <label for="it19140162-email">Email address</label>
                        <input type="email" className="form-control" id="it19140162-email" placeholder="name@example.com" name="email" value={this.state.design.email} readOnly
                        />
                       
                    </div>
                    
                    <div className="form-group">
                        <label for="it19140162-phone">Phone</label>
                        <input type="text" className="form-control" id="it19140162-phone" placeholder="Enter your phone number" name="phone" value={this.state.design.phone} readOnly
                        
                       />
                    </div>


                    <div className="form-group">
                            <label for="it19140162-comments">Other Comments</label>
                            <textarea className="form-control" id="it19140162-comments" rows="3" name="comments" value={this.state.design.otherComments} readOnly>
                                  
                            </textarea>
                    </div>

                    <div>
                        <button type="submit" className="btn btn-success" onClick={this.createPDF}>Download</button>
                    </div>
        </form>
                </div>
                
                </div><br/>
            </div>          
      

    )}

}
export default viewReq;