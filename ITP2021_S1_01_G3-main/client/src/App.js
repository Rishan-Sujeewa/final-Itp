import { React, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//customers
import CustomerTable from "./components/customerTable/customerTable";
import AddCustomer from "./components/addCustomer/addCustomer";
import UpdateCustomer from "./components/updateCustomer/updateCustomer";
import CustomerLogin from "./components/customerLogin/customerLogin";
import CustomerRegister from "./components/customerRegister/customerRegister";
import CustomerUserProfile from "./components/customerUserProfile/customerUserProfile";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import PublicRoute from "./components/publicRoute/PublicRoute";
import CustomerPasswordReset from "./components/customerPasswordReset/customerPasswordReset";
//branches
import AddBranch from "./components/addBranch";
import AllBranches from "./components/allBranches";
import ViewBranches from "./components/viewBranch";
import UpdateBranches from "./components/updateBranch";
import DownloadBranches from "./components/downloadBranch";

//employee

import Addemployee from "./components/Addemployee";
import AllEmployee from "./components/AllEmployee";
import editEmployee from "./components/editEmployee";
import deleteEmployee from "./components/deleteEmployee";
import EmployeeProblem from "./components/EmployeeProblem";
import AddProblem from "./components/AddProblem";

//Salary
import AddSalaryDetails from "./components/AddSalaryDetails";
import AllSalaryDetails from "./components/AllSalaryDetails";
import UpdateSalary from "./components/UpdateSalary";
import GenerateRepo from "./components/GenerateRepo";

//Vehicle
import AddVehicle from "./components/Vehicles/AddVehicles";
import ViewAllVehicles from "./components/Vehicles/ViewAllVehicles";
import EditVehicles from "./components/Vehicles/EditVehicles";
import Search from "./components/Vehicles/Search";
import Report from "./components/Vehicles/Report";

//stock

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

function App() {
  const dispatch = useDispatch();
  const authAdmin = useSelector((state) => state.authAdmin);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!authAdmin.authenticate) {
      dispatch(isUserLoggedIn());
    }
    if (authAdmin.authenticate) {
      //dispatch(getInitialData());
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
    <div className="App">
      <Router>
        {/*customers */}
        <Route exact path="/customers" component={CustomerTable} exact></Route>
        <Route path="/customer/add" component={AddCustomer} exact></Route>
        <Route
          path="/updateCustomer/:id"
          component={UpdateCustomer}
          exact
        ></Route>
        <PublicRoute
          path="/customer/login"
          component={CustomerLogin}
          exact
        ></PublicRoute>
        <PublicRoute
          path="/customer/register"
          component={CustomerRegister}
          exact
        ></PublicRoute>
        <PrivateRoute
          path="/customer/profile"
          component={CustomerUserProfile}
          exact
        ></PrivateRoute>
        <PrivateRoute
          path="/customer/profile/password-reset"
          component={CustomerPasswordReset}
          exact
        ></PrivateRoute>

        {/* branches */}
        <Route path="/view" exact component={ViewBranches} />
        <Route path="/download" exact component={DownloadBranches} />
        <Route path="/update" exact component={UpdateBranches} />
        <Route path="/add" exact component={AddBranch} />
        <Route path="/branches" exact component={AllBranches} />

        {/*employee */}

        <Route path="/employee/add" exact component={Addemployee} />
        <Route path="/employee" exact component={AllEmployee} />
        <Route path="/employee/update/:id" exact component={editEmployee} />
        <Route path="/employee/delete/:id" exact component={deleteEmployee} />
        <Route path="/addC" exact component={AddProblem} />
        <Route path="/employee/display" exact component={EmployeeProblem} />

        {/*Salary */}
        <Route path="/salary/generate" exact component={GenerateRepo} />
        <Route path="/salary/update" exact component={UpdateSalary} />
        <Route path="/salary/add" exact component={AddSalaryDetails} />
        <Route path="/salary" exact component={AllSalaryDetails} />

        {/*Vehicle */}
        <Route path="/vehicle/add" exact component={AddVehicle} />
        <Route path="/vehicle" exact component={ViewAllVehicles} />
        <Route path="/vehicle/update/:vId" exact component={EditVehicles} />
        <Route path="/vehicle/get/:vId" exact component={Search} />
        <Route path="/vehicle/report" exact component={Report} />

        {/*dashboard*/}
        <HOCPrivateRoute path="/" exact component={Home} />
        <HOCPrivateRoute path="/page" exact component={NewPage} />
        <HOCPrivateRoute path="/category" exact component={Category} />
        <HOCPrivateRoute path="/products" exact component={Products} />
        <HOCPrivateRoute path="/orders" exact component={Orders} />

        <Route path="/signin" exact component={Signin} />
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
      </Router>
    </div>
  );
}

export default App;
