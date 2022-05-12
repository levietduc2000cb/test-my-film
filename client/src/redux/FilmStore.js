import { configureStore } from "@reduxjs/toolkit";
import reducer from "./FilmSlice";
const rootReducer = {
  FilmReducer: reducer,
};
const storeFilm = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default storeFilm;
