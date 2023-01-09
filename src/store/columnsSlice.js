import { createSlice } from "@reduxjs/toolkit";

// const columnsInitialState = [
//   { projectId: "p1", columnsId: "p1d1", id: "c1", columnName: "بعدی" },
//   { projectId: "p1", columnsId: "p1d1", id: "c2", columnName: "در حال انجام" },
//   { projectId: "p1", columnsId: "p1d1", id: "c3", columnName: "تمام شده" },
//   { projectId: "p2", columnsId: "p2d1", id: "c2", columnName: "در حال انجام" },

// ];
const columnsInitialState = [
  { projectId: "p1", boardId: "p1b1", id: "p1b1c1", columnName: "بعدی" },
  { projectId: "p1",boardId: "p1b1",id: "p1b1c2", columnName: "در حال انجام" },
  { projectId: "p1",boardId: "p1b1", id: "p1b1c3", columnName: "تمام شده" },
  { projectId: "p1",boardId: "p1b1", id: "p1b1c4", columnName: "تمام شده" },
  { projectId: "p1",boardId: "p1b1", id: "p1b1c5", columnName: "تمام شده" },
  { projectId: "p2", boardId: "p2b1", id: "p2b1c1", columnName: "در حال انجام" },
  { projectId: "p2", boardId: "p2b1", id: "p2b1c2", columnName: "در حال انجام" },
  { projectId: "p1", boardId: "p1b1", id: "p1b1c6", columnName: "در حال انجام" },



];

export const columnsSlice = createSlice({
  name: "columns",
  initialState: { columns: columnsInitialState },
  reducers: {
    setColumns: (state, action) => {
      //is this approach immutable or mutable by looks tho .-.
      //   return { ...state, projectscolumnss: [...action.payload] };
      return (state.columns = action.payload);
    },
    newColumn: (state, action) => {
      return state.columns.push(action.payload);
    },
    editColumn: (state, action) => {
      const columns = state.columns.map((column) => {
        if (column.id === action.payload.id) {
          column = action.payload;
        }
        return columns;
      });
      return (state.columns = columns);
    },

    //by deleting a column all the corresponding cards should get deleted as well, gotta map on cards and call remove corresponding cards as well in here which i havnt implemented yet
    deleteColumn: (state, action) => {
      const columns = state.columns.filter(
        (columns) => columns.id !== action.payload.id
      );
      state.columns = columns;
    },
  },
});

export const { setColumns, newColumn, editColumn, deleteColumn } =
  columnsSlice.actions;

export default columnsSlice.reducer;
