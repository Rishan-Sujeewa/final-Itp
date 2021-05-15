import {React,useEffect } from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//customers
import CustomerTable from './components/Customers/customerTable/customerTable';
import AddCustomer from './components/Customers/addCustomer/addCustomer';
import UpdateCustomer from './components/Customers/updateCustomer/updateCustomer';
import CustomerLogin from './components/Customers/customerLogin/customerLogin';
import CustomerRegister from './components/Customers/customerRegister/customerRegister';
import CustomerUserProfile from './components/Customers/customerUserProfile/customerUserProfile';
import PrivateRoute from './components/Customers/privateRoute/PrivateRoute';
import PublicRoute from './components/Customers/publicRoute/PublicRoute';
import CustomerPasswordReset from './components/Customers/customerPasswordReset/customerPasswordReset';
//branches
import AddBranch from './components/Branches/addBranch';
import AllBranches from './components/Branches/allBranches';
import ViewBranches from './components/Branches/viewBranch';
import UpdateBranches from './components/Branches/updateBranch';
import DownloadBranches from './components/Branches/downloadBranch';

//employee

import CreateEmployee from "./components/Employee/create-Employee.component";
import EditEmployee from "./components/Employee/edit-Employee.component";
import EmployeeList from "./components/Employee/Employee-list.component";

//Salary
import CreateSalary from "./components/Salaries/create-salary.component";
import EditSalary from "./components/Salaries/edit-salary.component";
import SalaryList from "./components/Salaries/salary-list.component";
import GenerateSalaryRepo from './components/Salaries/GenerateSalaryRepo';

//Vehicle
import CreateVehicle from "./components/Vehicles/create-vehicle.component";
import EditVehicle from "./components/Vehicles/edit-vehicle.component";
import VehicleList from "./components/Vehicles/vehicle-list.component";


//stock
import AdminDashBoard from "./components/Admin_dash/home";
//admin board
import Home from "./containersAdmin/Home";
import Signin from "./containersAdmin/Signin";
import Signup from "./containersAdmin/Signup";
import HOCPrivateRoute from "./componentsAdmin/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn, getInitialData } from "./actionsAdmin";
import Products from "./containersAdmin/Products";
import Orders from "./containersAdmin/Orders";
import Category from "./containersAdmin/Category";
import NewPage from "./containersAdmin/NewPage";

//flipkart

import HomePage from "./containers/HomePage";
import ProductListPage from "./containers/ProductListPage";
import { isClientLoggedIn, updateCart } from "./actions";
import ProductDetailsPage from "./containers/ProductDetailsPage";
import CartPage from "./containers/CartPage";
import CheckoutPage from "./containers/CheckoutPage";
import OrderPage from "./containers/OrderPage";
import OrderDetailsPage from "./containers/OrderDetailsPage";



//constructions
import HeaderCom from './components/constructions/header';
import AddCustomizedReqCom from './components/constructions/AddCustomizedReq';
import findHome from './components/constructions/constructionDash';
import AddSystemizedReq from './components/constructions/AddSystemizedReq';
import editSysReq from './components/constructions/EditSystemizedReq';
import editCusReq from './components/constructions/EditCustomizedReq';
import myConsreq from './components/constructions/UserDashConstruction';
import myConsreqPrint from './components/constructions/ConsReqPrint';
import AdminConstructionDash from './components/constructions/adminDash';
import insertDesign from './components/constructions/InsertSystemizedDesigns';


//Orders
import Checkout from './components/Checkout_Layout/Checkout';
import Cart from './components/Cart_Layout/Cart';
import userHistory from './components/userHistory/userHistory';
import Order from './components/Order_dash/Order';




function App() {
  const dispatch = useDispatch();
  const authAdmin = useSelector((state) => state.authAdmin);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!authAdmin.authenticate) {
      dispatch(isUserLoggedIn());
    }
    if (authAdmin.authenticate) {
      dispatch(getInitialData());
    }
  }, [authAdmin.authenticate]);
  
  //stock
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isClientLoggedIn());
    }
  }, [auth.authenticate]);

  useEffect(() => {
    console.log("App.js - updateCart");
    dispatch(updateCart());
  }, [auth.authenticate]);



  return (
    <div className = "App">
        <Router>

        
      <Route path="/signin" exact component={Signin} /> 
      {/*customers */}
      <Route exact path="/customers" component = {CustomerTable} exact></Route>
      <Route path="/customer/add" component = {AddCustomer} exact></Route>
      <Route path="/updateCustomer/:id" component = {UpdateCustomer} exact></Route>
      <PublicRoute path="/customer/login" component = {CustomerLogin} exact></PublicRoute>
      <PublicRoute path="/customer/register" component = {CustomerRegister} exact></PublicRoute>
      <PrivateRoute path="/customer/profile" component = {CustomerUserProfile} exact></PrivateRoute>
      <PrivateRoute path="/customer/profile/password-reset" component = {CustomerPasswordReset} exact></PrivateRoute>
    
      {/* branches */}
      <Route path="/view" exact component={ViewBranches}/>
      <Route path="/download" exact component={DownloadBranches}/>
      <Route path="/update" exact component={UpdateBranches}/>
      <Route path="/add" exact component={AddBranch}/>
      <Route path="/branches" exact component={AllBranches}/>

      {/*employee */}
      <Route exact path='/Employee/' component={CreateEmployee} />
      <Route path="/create-Employee"  component= {CreateEmployee} />
      <Route path="/edit-Employee/:id"  component= {EditEmployee} />
      <Route path="/Employee-list"  component= {EmployeeList} />

      {/*Salary */}
      <Route path= "/generate-salary" exact component= {GenerateSalaryRepo}/>
      <Route path="/create-salary" component={CreateSalary} />
      <Route path="/edit-salary/:id" component={EditSalary} />
      <Route path="/salary-list" component={SalaryList} />

       {/*Vehicle */}
        <Route exact path='/vehicle/' component={CreateVehicle} />
        <Route path="/create-vehicle" component={CreateVehicle} />
        <Route path="/edit-vehicle/:id" component={EditVehicle} />
        <Route path="/vehicle-list" component={VehicleList} />


        {/*dashboard*/}
        <HOCPrivateRoute path="/" exact component={Home} />
        <HOCPrivateRoute path="/page" exact component={NewPage} />
        <HOCPrivateRoute path="/category" exact component={Category} />
        <HOCPrivateRoute path="/products" exact component={Products} />
        <HOCPrivateRoute path="/orders" exact component={Orders} />

      <HOCPrivateRoute path="/admin_dash" exact component ={AdminDashBoard} />
      <Route path="/signup" exact component={Signup} />


        {/* flipkart*/}
        <Route path="/flip" exact component={HomePage} />
        <Route path="/cart" exact component={CartPage} />
        <Route path="/checkout" exact component={CheckoutPage} />
        <Route path="/account/orders" exact component={OrderPage} />
        <Route
          path="/order_details/:orderId"
          exact
          component={OrderDetailsPage}
        />
        <Route
          path="/:productSlug/:productId/p"
          component={ProductDetailsPage}
          exact
        />
        <Route path="productList/:slug" component={ProductListPage} exact />

        {/* stock          
     
      </Switch> */}
      
      {/*constructions*/}
      
      <Route path="/Creq" exact component={AddCustomizedReqCom}/>
      <Route path="/findHome" exact component={findHome}/>
      <Route path="/AddSystemizedReq/:id" exact component={AddSystemizedReq}/>
      <Route path="/editSreq" exact component={editSysReq}/>
      <Route path="/editCreq/:id" exact component={editCusReq}/>
      <Route path="/userDashCons" exact component={myConsreq}/>
      <Route path="/userConsPrint" exact component={myConsreqPrint}/>
      <Route path="/insertD" exact component={insertDesign}/>
      <Route path="/adminConsDash" exact component={AdminConstructionDash}/>
        
		
		{/*Orders*/}
		<Route path="/cart" exact component={Cart}/>
		<Route path="/cart/checkout" exact component={Checkout}/>
		<Route path="/myHistory" exact component={userHistory}/>
		<Route path='/admin/orders' exact component = {Order}/>
		
      </Router>
    </div>
  );
}

export default App;
