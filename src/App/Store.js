import { configureStore } from "@reduxjs/toolkit";

import { newsApi } from "../Services/newsApi";


export const Store = configureStore({
    reducer: {
        [newsApi.reducerPath]: newsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsApi.middleware),
})

