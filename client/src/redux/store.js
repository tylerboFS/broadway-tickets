import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import productionReducer from "./productions/productionSlice";

export default configureStore({
  reducer: { auth: authReducer, production: productionReducer },
});
