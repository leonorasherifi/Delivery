import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import productSlideReducer from "./productSlide";



export const Store = configureStore({
    reducer: {
      user : userSliceReducer,
      product : productSlideReducer
      
    },
  });
  