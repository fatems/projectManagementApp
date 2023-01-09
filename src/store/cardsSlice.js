import { createSlice } from "@reduxjs/toolkit";

const cardsInitialState = [
  {
    id: "x1",
    projectId: "p1",
    boardId: "p1b1",
    columnId: "p1b1c1",
    cardName: "فعالیت 1",
    assignees: ["سیده فاطمه سیدعباسی", "سیده عسل سید عباسی"],
    priority: "زیاد",
    startDate: "09/13/2022",
    dueDate: "09/15/2022",
    color: "#4BD867",
  },

  {
    id: "x2",
    projectId: "p1",
    boardId: "p1b1",
    columnId: "p1b1c2",
    cardName: "فعالیت 2",
    assignees: ["سیده فاطمه سیدعباسی"],
    priority: "متوسط",
    startDate: "09/13/2022",
    dueDate: "09/15/2022",
    color: "#F0F03B",
  },

  {
    id: "x3",
    projectId: "p1",
    boardId: "p1b1",
    columnId: "p1b1c3",
    cardName: "فعالیت 3",
    assignees: ["سیده فاطمه سیدعباسی", "بیسان توانگری"],
    priority: "کم",
    startDate: "09/13/2022",
    dueDate: "09/15/2022",
    color: "#FF488B",
  },
  {
    id: "x4",
    projectId: "p1",
    boardId: "p1b1",
    columnId: "p1b1c1",
    cardName: "فعالیت 4",
    assignees: ["سیده فاطمه سیدعباسی", "بیسان توانگری"],
    priority: "کم",
    startDate: "09/13/2022",
    dueDate: "09/15/2022",
    color: "orange",
  },
  
  {
    id: "x5",
    projectId: "p1",
    boardId: "p1b1",
    columnId: "p1b1c3",
    cardName: "فعالیت 5",
    assignees: ["سیده فاطمه سیدعباسی", "بیسان توانگری"],
    priority: "کم",
    startDate: "09/13/2022",
    dueDate: "09/15/2022",
    color: "purple",
  },
];

export const cardsSlice = createSlice({
  name: "cards",
  initialState: { cards: cardsInitialState },
  reducers: {
    setCards: (state, action) => {
      //is this approach immutable or mutable by looks tho .-.
      //   return { ...state, projectsCardss: [...action.payload] };
      return (state.cards = action.payload);
    },
    newCard: (state, action) => {
      return state.cards.push(action.payload);
    },
    editCard: (state, action) => {
      const cards = state.cards.map((card) => {
        if (card.id === action.payload.id) {
          card = action.payload;
        }
        return cards;
      });
      return (state.cards = cards);
    },
    deleteCard: (state, action) => {
      const cards = state.cards.filter(
        (cards) => cards.id !== action.payload.id
      );
      state.cards = cards;
    },
  },
});

export const { setCards, newCard, editCard, deleteCard } = cardsSlice.actions;

export default cardsSlice.reducer;
