import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialTasks = [
  { id: nanoid(), text: 'Learn Nest', completed: true },
  { id: nanoid(), text: 'Get good at JS', completed: true },
  { id: nanoid(), text: 'Master React JS', completed: false },
  { id: nanoid(), text: 'Discover ReduxToolkit', completed: false },
  { id: nanoid(), text: 'Build calc', completed: false },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialTasks,
  reducers: {
    addTask: {
      reducer(state, { payload }) {
        state.unshift(payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
          },
        };
      },
    },
    deleteTask(state, { payload }) {
      const idx = state.findIndex(task => task.id === payload);
      state.splice(idx, 1);
    },
    toggleCompleted(state, { payload }) {
      const idx = state.findIndex(el => el.id === payload);
      state[idx].completed = !state[idx].completed;
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
