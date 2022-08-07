import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  backlogItems: [],
  toDoItems: [],
  inProgressItems: [],
  doneItems: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addToBacklog: (state, action) => {
      state.backlogItems.push(action.payload);
    },
    addTodo: (state, action) => {
      state.toDoItems.push(action.payload);
      if (state.backlogItems.indexOf(action.payload) > -1) {
        state.backlogItems.splice(
          state.backlogItems.indexOf(action.payload),
          1
        );
      }
    },
    moveToBacklog: (state, action) => {
      state.backlogItems.push(action.payload);
      if (state.toDoItems.indexOf(action.payload) > -1) {
        state.toDoItems.splice(state.toDoItems.indexOf(action.payload), 1);
      }
    },
    addToProgress: (state, action) => {
      state.inProgressItems.push(action.payload);
      if (state.toDoItems.indexOf(action.payload) > -1) {
        state.toDoItems.splice(state.toDoItems.indexOf(action.payload), 1);
      }
    },
    moveToTodo: (state, action) => {
      state.toDoItems.push(action.payload);
      if (state.inProgressItems.indexOf(action.payload) > -1) {
        state.inProgressItems.splice(
          state.inProgressItems.indexOf(action.payload),
          1
        );
      }
    },
    addToDone: (state, action) => {
      state.doneItems.push(action.payload);
      if (state.inProgressItems.indexOf(action.payload) > -1) {
        state.inProgressItems.splice(
          state.inProgressItems.indexOf(action.payload),
          1
        );
      }
    },
  },
});

export const {
  addToBacklog,
  addTodo,
  moveToBacklog,
  addToProgress,
  moveToTodo,
  addToDone,
} = todoSlice.actions;

export default todoSlice.reducer;
