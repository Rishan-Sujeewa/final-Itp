import React, {useEffect,useState} from "react";
import Header from "../../componentsFlip/Header";
import Layout from "../../componentsFlip/Layout";
import MenuHeader from "../../componentsFlip/MenuHeader";
import AllProductsListPage from "../../containers/ProductListPage/ClothingAndAccessories/index";
import ProductService from "../../services/ProductService";

/**
 * @author
 * @function HomePage
 **/

const HomePage = (props) => {

  const [products,setProducts] = useState([]);

  useEffect(()=>{
    ProductService.getInitialData().then((res)=>{
      if(res.status === 200){
        setProducts(res.data.products)
      }
    })
  },[])

  return <Layout>
  <AllProductsListPage products={products}/>
  </Layout>;
};

export default HomePage;
