import React, { useState, Fragment, Component } from "react";
import Layout from "../../componentsAdmin/Layout";
import { Container, Row, Col, Table } from "react-bootstrap";
import Input from "../../componentsAdmin/UI/Input";
import Modal from "../../componentsAdmin/UI/Modal";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, deleteProductById } from "../../actionsAdmin";
import {
  IoIosAdd,
  IoIosTrash,
  IoIosInformationCircle,
  IoIosDownload
} from "react-icons/io";
//import PrintProductsPreview from "./printPreview";
//import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import { jsPDF } from 'jspdf'
import 'jspdf-autotable'
// const multer = require("multer");
// const shortid = require("shortid");
// const path = require("path");

import "./itc19988870_style.css";

/**
 * @author
 * @function Products
 **/

const Products = (props) => {
  //const [id,setId] = useState("");//modifiy latest
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [productPictures, setProductPictures] = useState([]);
  const [show, setShow] = useState(false);
  const [productDetailModal, setProductDetailModal] = useState(false);
  const [productDetails, setProductDetails] = useState(null);
  const category = useSelector((state) => state.categoryAdmin);
  const product = useSelector((state) => state.productAdmin);
  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
  };

  const submitProductForm = () => {
    var form = new FormData()
    //form.append("id",id);//modifiy latest
    form.append("name", name)
    form.append("quantity", quantity);
    form.append("price", price);
    form.append("description", description);
    form.append("category", categoryId);

    for (let pic of productPictures) {
      form.append("productPicture", pic);
    }

    dispatch(addProduct(form)).then(() => setShow(false));
  };
  const handleShow = () => setShow(true);

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }

    return options;
  };

  const handleProductPictures = (e) => {
    // console.log("file------------------", e.target.files[0])
    setProductPictures([e.target.files[0]]);
  };

  const renderProducts = () => {
    return (
      <Table style={{ fontSize: 18 }} responsive="sm">
        <thead className="TAB">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.products.length > 0
            ? product.products.map((product, index) => (
              <tr key={product._id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.category.name}</td>
                <td>
                  <button onClick={() => showProductDetailsModal(product)} className="btn it19951386-trans-green-btn"><IoIosInformationCircle/><span className="spinner-border spinner-border-sm" id="loading" role="status" aria-hidden="true" style={{ display: 'none' }}></span>View</button>
                
                  <button onClick={() => {
                    const payload = {
                      productId: product._id,
                    };
                    dispatch(deleteProductById(payload));
                  }} className="btn" style={{backgroundColor:"transparent",border:"2px red solid",color:"red"}}><IoIosTrash /><span className="spinner-border spinner-border-sm" id="loading" role="status" aria-hidden="true" style={{ display: 'none' }}></span>Delete</button>
                
                </td>
              </tr>
            ))
            : null}
        </tbody>
      </Table>
    );
  };

  const clickPdf = (handlePrint) => {
    handlePrint()
  }

  const renderAddProductModal = () => {
    return (
      <Modal
        show={show}
        handleClose={handleClose}
        modalTitle={"Add New Product"}
        onSubmit={submitProductForm}
      >
        <Input
          label="Name"
          value={name}
          placeholder={`Product Name`}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Quantity"
          value={quantity}
          placeholder={`Quantity`}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <Input
          label="Price"
          value={price}
          placeholder={`Price`}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          label="Description"
          value={description}
          placeholder={`Description`}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          className="form-control"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option>select category</option>
          {createCategoryList(category.categories).map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        {productPictures.length > 0
          ? productPictures.map((pic, index) => (
            <div key={index}>{pic.name}</div>
          ))
          : null}
        <input
          type="file"
          name="productPicture"
          onChange={handleProductPictures}
        />
      </Modal>
    );
  };

  const handleCloseProductDetailsModal = () => {
    setProductDetailModal(false);
  };

  const showProductDetailsModal = (product) => {
    setProductDetails(product);
    setProductDetailModal(true);
  };

  const renderProductDetailsModal = () => {
    if (!productDetails) {
      return null;
    }

    return (
      <Modal
        show={productDetailModal}
        handleClose={handleCloseProductDetailsModal}
        modalTitle={"Product Details"}
        size="lg"
        buttons={[]}
      >
        <Row>
          <Col md="6">
            <label className="key">Name</label>
            <p className="value">{productDetails.name}</p>
          </Col>
          <Col md="6">
            <label className="key">Price</label>
            <p className="value">{productDetails.price}</p>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <label className="key">Quantity</label>
            <p className="value">{productDetails.quantity}</p>
          </Col>
          <Col md="6">
            <label className="key">Category</label>
            <p className="value">{productDetails.category.name}</p>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <label className="key">Description</label>
            <p className="value">{productDetails.description}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <label className="key">Product Pictures</label>
            <div style={{ display: "flex" }}>
              {productDetails.productPictures.map((picture) => (
                <div className="productImgContainer">
                  <img src={`http://localhost:3000/${picture.img}`} alt="" />
                </div>
              ))}
            </div>
          </Col>
        </Row>

      </Modal>
    );
  };

  const pdf = () => {
    const loading = document.getElementById('loading');
    loading.style.display = "";//display loading icon
    const dwnIcon = document.getElementById('dwn-icon');
    dwnIcon.style.display = "none";//hide download icn

    setTimeout(() => {
      loading.style.display = "none";
      dwnIcon.style.display = "";
    }, 1300);//display loading icon for 2 seconds  

    let bodyData = [];
    for (let i = 0; product.products.length > i; i++) {
      bodyData.push([product.products[i]._id, product.products[i].name, product.products[i].price, product.products[i].quantity, product.products[i].category.name]);
    }//save json data to bodydata in order to print in the pdf table

    const doc = new jsPDF({ orientation: "portrait" });
    var time = new Date().toLocaleString();
    doc.setFontSize(27);
    doc.text(`Product Details Report`, 105, 13, null, null, "center");
    doc.setFontSize(10);
    doc.text(`(Generated on ${time})`, 105, 17, null, null, "center");
    doc.setFontSize(12);
    doc.text("Thilina Hardware - No 55, Main Road, Horana", 105, 22, null, null, "center");
    //doc.text("No 55, Main Road, Horana", 105, 30, null, null, "center"); 
    //doc.addImage(img, "JPEG",0,20);
    doc.autoTable({
      theme: 'grid',
      styles: { halign: 'center' },
      headStyles: { fillColor: [71, 201, 76] },
      startY: 27,
      head: [['Product ID', 'Product Name', 'Price', 'Quantity', 'Category',]],
      body: bodyData
    })
    doc.save('ProductReport.pdf');
  }//report generation function

  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Products</h3>
              <div style={{ display: "flex" }}>
                <div style={{marginLeft:"2px"}}>
                  <button onClick={handleShow} className="btn it19951386-trans-green-btn"><IoIosAdd /><span className="spinner-border spinner-border-sm" id="loading" role="status" aria-hidden="true" style={{ display: 'none' }}></span> Add</button>
                </div>
                <div style={{marginLeft:"2px"}}>
                  <button onClick={pdf} className="btn it19951386-trans-green-btn"><svg id="dwn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
                    <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z" />
                  </svg><span className="spinner-border spinner-border-sm" id="loading" role="status" aria-hidden="true" style={{ display: 'none' }}></span> Download</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>{renderProducts()}</Col>
        </Row>
      </Container>
      { renderAddProductModal()}
      { renderProductDetailsModal()}
    </Layout >
  );
};

export default Products;
