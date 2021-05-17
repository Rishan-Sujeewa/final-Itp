import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../../actions";
import Card from "../../../componentsFlip/UI/Card";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";

import "./itc19988870_style.css";

/**
 * @author
 * @function ClothingAndAccessories
 **/

const ClothingAndAccessories = ({products}) => {
  // const product = useSelector((state) => state.product);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const { match } = props;
  //   dispatch(getProductsBySlug(match.params.slug));
  // }, []);

  return (
    <div style={{ padding: "10px" }}>
      <Card
        style={{
          boxSizing: "border-box",
          padding: "10px",
          display: "flex"
        }}
      >
        {products.length>0 && products.map((product) => (
          <div className="caContainer">
            <Link
              className="caImgContainer"
              to={`/productDetails/${product._id}`}
            >
              <img src={product.productPictures[0].img} />
            </Link>
            <div>
              <div className="caProductName">{product.name}</div>
              <div className="caProductPrice">
                <BiRupee />
                {product.price}
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default ClothingAndAccessories;
