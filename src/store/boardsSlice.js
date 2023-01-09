import { createSlice } from "@reduxjs/toolkit";

//normalized and put in different files,\: boards, columns, cards
// const boardsInitialState2 = [
//   {
//     projectId: "p1",
//     boardsInfos: [
//       {
//         boardId: "p1b1",
//         boardName: "برد تست",
//         cardsInfos: [
//           {
//             columnName: "بعدی",
//             cards: [
//               {
//                 cardName: "فعالیت 3",
//                 assignees: ["سیده فاطمه سیدعباسی", "سیده عسل سید عباسی"],
//                 priority: "زیاد",
//                 startDate: "09/13/2022",
//                 dueDate: "09/15/2022",
//                 color: "#4BD867",
//               },
//             ],
//           },
//           {
//             columnName: "در حال انجام",
//             cards: [
//               {
//                 cardName: "فعالیت 2",
//                 assignees: ["سیده فاطمه سیدعباسی"],
//                 priority: "متوسط",
//                 startDate: "09/13/2022",
//                 dueDate: "09/15/2022",
//                 color: "#F0F03B",
//               },
//             ],
//           },
//           {
//             columnName: "تمام شده",
//             cards: [
//               {
//                 cardName: "فعالیت 1",
//                 assignees: ["سیده فاطمه سیدعباسی", "بیسان توانگری"],
//                 priority: "کم",
//                 startDate: "09/13/2022",
//                 dueDate: "09/15/2022",
//                 color: "#FF488B",
//               },
//             ],
//           },
//           {
//             columnName: "تمام شده",
//             cards: [
//               {
//                 cardName: "فعالیت 1",
//                 assignees: ["سیده فاطمه سیدعباسی", "بیسان توانگری"],
//                 priority: "کم",
//                 startDate: "09/13/2022",
//                 dueDate: "09/15/2022",
//                 color: "#FF488B",
//               },
//             ],
//           },
//           {
//             columnName: "تمام شده",
//             cards: [
//               {
//                 cardName: "فعالیت 1",
//                 assignees: ["سیده فاطمه سیدعباسی", "بیسان توانگری"],
//                 priority: "کم",
//                 startDate: "09/13/2022",
//                 dueDate: "09/15/2022",
//                 color: "#FF488B",
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ];
// const boardsInitialState3 = [
//   {
//     projectId: "p1",
//     boardsInfos: [
//       {
//         boardId: "p1b1",
//         boardName: "برد تست",
//         cardsInfos: [
//           {
//             columnName: "بعدی",
//             cards: [
//               {
//                 cardName: "فعالیت 3",
//                 assignees: ["سیده فاطمه سیدعباسی", "سیده عسل سید عباسی"],
//                 priority: "زیاد",
//                 startDate: "09/13/2022",
//                 dueDate: "09/15/2022",
//                 color: "#4BD867",
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     projectId: "p2",
//     boardsInfos: [
//       {
//         boardId: "p2b2",
//         boardName: "برد تست",
//         cardsInfos: [
//           {
//             columnName: "بعدی",
//             cards: [
//               {
//                 cardName: "فعالیت 2",
//                 assignees: ["سیده فاطمه سیدعباسی", "سیده عسل سید عباسی"],
//                 priority: "زیاد",
//                 startDate: "09/13/2022",
//                 dueDate: "09/15/2022",
//                 color: "#4BD867",
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   }
// ];

const boardsInitialState = [
  { projectId: "p1", id: "p1b1", boardName: "برد تست" },
  { projectId: "p1", id: "p1b2", boardName: "برد تست 2" },
  { projectId: "p1", id: "p1b3", boardName: "برد تست 3" },
  { projectId: "p2", id: "p2b1", boardName: "برد تست" },
  { projectId: "p2", id: "p2b2", boardName: "برد تست 2" },
  { projectId: "p3", id: "p3b1", boardName: "برد تست 3" },
];

// createSlice() lets you write immutable updates using “mutation-like” logic within the case reducers. This is because createSlice() uses the Immer library internally to turn mutating code into immutable updates.

export const boardsSlice = createSlice({
  name: "boards",
  initialState: { boards: boardsInitialState },
  reducers: {
    setBoards: (state, action) => {
      //is this approach immutable or mutable by looks tho .-.
      //   return { ...state, projectsBoards: [...action.payload] };
      return (state.boards = action.payload);
    },
    newBoard: (state, action) => {state.boards.push(action.payload)},
    editBoard: (state, action) => {
      const boards = state.boards.map((board) => {
        if (
          board.id === action.payload.id &&
          board.projectId === action.payload.projectId
        ) {
          board = action.payload;
        }
        return boards;
      });
      return (state.boards = boards);
    },
    deleteBoard: (state, action) => {
      const boards = state.boards.filter(
        (board) =>
          board.id !== action.payload.id &&
          board.projectId !== action.payload.projectId
      );
      state.boards = boards;
    },
  },
});

export const { setBoards, newBoard, editBoard, deleteBoard } =
  boardsSlice.actions;

export default boardsSlice.reducer;
