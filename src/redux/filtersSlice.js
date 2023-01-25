import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setFilterStatus(state, { payload }) {
      state.status = payload;
    },
  },
});

export const { setFilterStatus } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
