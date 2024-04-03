import { configureStore } from "@reduxjs/toolkit";
import  TodoSlice  from "./slices/TodoSlice";

const Store = configureStore({
    reducer:{
        todo : TodoSlice,
    },
})

Store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(Store.getState()))
})

export default Store;