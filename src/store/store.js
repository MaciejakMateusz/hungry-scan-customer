import {combineReducers, configureStore} from "@reduxjs/toolkit";
import dishesCategoriesReducer from "../slices/dishesCategoriesSlice";

const rootReducer = combineReducers({
    dishesCategories: dishesCategoriesReducer
})

export const store = configureStore({
    reducer: rootReducer
});