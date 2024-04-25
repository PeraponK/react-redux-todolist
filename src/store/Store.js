import { configureStore } from "@reduxjs/toolkit";
import  todoSlice  from "./Reducer";

export default configureStore({
    reducer:{
        todos:todoSlice
    }
})