import authAdminReducer from "./auth.admin.reducers";
import userAdminReducer from "./user.admin.reducer";
import productAdminReducer from "./product.admin.reducer";
import categoryAdminReducer from "./category.admin.reducer";
import orderReducer from "./order.admin.reducer";
import pageReducer from "./page.admin.reducer";
import categoryReducer from "./category.reducer";
import productReducer from "./product.reducer";
import authReducer from "./auth.reducer";
import cartReducer from "./cart.reducer";
import userReducer from "./user.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  authAdmin: authAdminReducer,
  userAdmin: userAdminReducer,
  categoryAdmin: categoryAdminReducer,
  productAdmin: productAdminReducer,
  orderAdmin: orderReducer,
  pageAdmin: pageReducer,
  category: categoryReducer,
  product: productReducer,
  auth: authReducer,
  cart: cartReducer,
  user: userReducer
});

export default rootReducer;
