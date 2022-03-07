import character from './slices/users'
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer:{
        character
    }
});