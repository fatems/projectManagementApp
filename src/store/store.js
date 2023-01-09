import { configureStore } from "@reduxjs/toolkit";
import boardsSlice from "./boardsSlice";
import cardsSlice from "./cardsSlice";
import columnsSlice from "./columnsSlice";
import projectsSlice from "./projectsSlice";

export const store = configureStore({
  reducer: {
    projectsSlice: projectsSlice,
    boardsSlice: boardsSlice,
    columnsSlice: columnsSlice,
    cardsSlice: cardsSlice,
  },
});
export default store;
