import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './home.css';
import Footer from '../../componentsFlip/Footer'
import Header from '../../componentsFlip/Header'
import HeaderCom from '../constructions/header'

export default function HomeComponent() {
    const [products,setproducts] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get('http://localhost:5000/api/getAllPro')//change this
            setproducts(response.data.products);//change this
        }
        fetchData();
        },[])//fetching product data

    return (
        <div>
            <HeaderCom/>
            <div className="cushome-row">
                {products.map((product) => {
                    return(
                <div class="cushome-column">
                    <div class="cushome-card">
                        <h5><b>{product.name}</b></h5>
                        <p>Rs. {product.price}.00</p>
                        <p>{product.description}</p>
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
                    )
                })}
                <Footer/>
            </div>
        </div>
    )
}
