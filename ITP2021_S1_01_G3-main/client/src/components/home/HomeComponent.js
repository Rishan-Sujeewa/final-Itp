import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './home.css';

export default function HomeComponent() {
    const [products,setproducts] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get('http://localhost:5000/customers')//change this
            setproducts(response.data);//change this
        }
        fetchData();
        },[])//fetching product data

    return (
        <div className="cushome-main">
            <div class="cushome-card">
                <div class="cushome-container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div>
        </div>
    )
}
