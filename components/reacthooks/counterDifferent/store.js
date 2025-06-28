import {configureStore} from "@reduxjs/toolkit";
import myCounter from "./counterSlice";
export const store = configureStore({
    reducer: {
        counter:myCounter
    },
})