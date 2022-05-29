// stores the whole state of the app, best to have a single store

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "..features/counter/counterSlice"
export const store = configureStore({
    reducer:  {
        counter:counterReducer,
    }
})