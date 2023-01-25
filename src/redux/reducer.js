import { statusFilters } from './constants';
import { createReducer } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import {
  addTask,
  deleteTask,
  setFilterStatus,
  toggleCompleted,
} from './actions';

const initialTasks = [
  { id: nanoid(), text: 'Learn Nest', completed: true },
  { id: nanoid(), text: 'Get good at JS', completed: true },
  { id: nanoid(), text: 'Master React JS', completed: false },
  { id: nanoid(), text: 'Discover ReduxToolkit', completed: false },
  { id: nanoid(), text: 'Build calc', completed: false },
];

export const tasksReducer = createReducer(initialTasks, {
  [addTask]: (state, { payload }) => {
    state.unshift(payload);
  },
  [deleteTask]: (state, { payload }) => {
    const idx = state.findIndex(task => task.id === payload);
    state.splice(idx, 1);
  },
  [toggleCompleted]: (state, { payload }) => {
    const idx = state.findIndex(el => el.id === payload);
    state[idx].completed = !state[idx].completed;
  },
});

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersReducer = createReducer(filtersInitialState, {
  [setFilterStatus]: (state, { payload }) => {
    state.status = payload;
  },
});
