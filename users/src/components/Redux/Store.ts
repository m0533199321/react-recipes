import { configureStore } from "@reduxjs/toolkit";
import RecipesSlice from "./RecipesSlice";

const Store = configureStore({
    reducer: {
        recipes: RecipesSlice.reducer,
    }
});

export type StoreType = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store