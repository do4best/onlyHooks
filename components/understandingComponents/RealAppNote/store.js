import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./counterSlice.js";

export const store = configureStore({
    reducer: {
        counter:CounterSlice
    },
});