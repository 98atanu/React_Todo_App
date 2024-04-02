import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./slices/TodoSlice";

const Store = configureStore({
    reducer:{
        todo : TodoSlice,
    }
})

export default Store;