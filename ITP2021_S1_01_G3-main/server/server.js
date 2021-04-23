//importing ependecies
const express = require('express');
const cors = require("cors");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const env = require("dotenv");

//customer
const customerRouter = require('./routes/customer.routes');
//authRouter
const authRouter = require('./routes/auth.routes');
//branches
const branchRouter = require('./routes/branch.routes');

//employee
const employee = require('./routes/employee');
const employeeproblem = require('./routes/employeeproblem');

//Salary
const salaryRoute = require('./routes/salary.route')

//Vehicle
const vehicleRoute = require('./routes/vehicle.route')
 
//stock
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
//const cartRoutes = require("./routes/cart");
const initialDataRoutes = require("./routes/admin/initialData");
const pageRoutes = require("./routes/admin/page");
// const addressRoutes = require("./routes/address");
// const orderRoutes = require("./routes/order");
// const adminOrderRoute = require("./routes/admin/order.routes");


//constructions - routes
const customizedRouter = require("./routes/customizedRequests.js");
const systemizedRouter = require("./routes/systemizedRequests.js");
const systemizedDRouter = require("./routes/systemizedDesigns.js");

//Orders
const order = require('./routes/order.js');
const cart = require('./routes/cart.js');
const adminDash = require('./routes/admin/order.routes.js');


//creating app
//const app = express();
// MONGO_URL = mongodb+srv://pasindu:pasindu@cluster0.5d7e1.mongodb.net/DATABASE?retryWrites=true&w=majority
//MONGO_URL = mongodb+srv://y2s2:y2s2@hardwaremanagementsys.pjucy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//configuring dotenv 
require('dotenv').config();

//dotenv vairiables
const port = process.env.PORT || 5000;

//dependencies used by the app
app.use(cors({
    origin: [
    'http://localhost:3000'
  ],
  credentials: true
    })
);
app.use(express.json())
const urlEncodedParser = express.urlencoded({ extended: false });
app.listen(port, (error) => {
    if(error) console.log(error);
    console.log('Server listening to PORT '+ port);
});

//customers
app.use('/customers',urlEncodedParser,customerRouter);
app.use('/customer', authRouter);

//branches
app.use("/branch", branchRouter);

//employee
app.use("/employee",employee);
app.use("/employeeProblem",employeeproblem);

//Salary
app.use('/salaries', salaryRoute);

//Vehicle
app.use('/vehicles', vehicleRoute);

//stock 
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
//app.use("/api", cartRoutes);
app.use("/api", initialDataRoutes);
app.use("/api", pageRoutes);
//app.use("/api", addressRoutes);
//app.use("/api", orderRoutes);
//app.use("/api", adminOrderRoute);


//constructions
app.use("/customizedReq",customizedRouter);
app.use("/systemizedReq",systemizedRouter);
app.use("/systemizedDesig",systemizedDRouter);

//Orders
// app.use('/api', order);
// app.use('/api', cart);
// app.use('/api',adminDash);

