import {combineReducers, configureStore} from "@reduxjs/toolkit";
import dishesCategoriesReducer from "../slices/dishesCategoriesSlice";
import statisticsReducer from "../slices/statisticsSlice";

const rootReducer = combineReducers({
    dishesCategories: dishesCategoriesReducer,
    statistics: statisticsReducer
})

export const store = configureStore({
    reducer: rootReducer
});