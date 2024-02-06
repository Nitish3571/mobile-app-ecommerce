import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "./redux/CardReducer";


export default configureStore({
    reducer:{
        cart:CardReducer
    }
})