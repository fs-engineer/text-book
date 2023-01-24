import { statusFilters } from './constants';

const initialTasks = {
  tasks: [
    { id: 0, text: 'Learn HTML and CSS', completed: true },
    { id: 1, text: 'Get good at JavaScript', completed: true },
    { id: 2, text: 'Master React', completed: false },
    { id: 3, text: 'Discover Redux', completed: false },
    { id: 4, text: 'Build amazing apps', completed: false },
  ],
  filters: {
    status: statusFilters.all,
  },
};

const tasksReducer = (state = initialTasks, action) => {
  switch (action.type) {
    case 'tasks/addTask': {
      return [action.payload, ...state];
    }

    case 'tasks/deleteTask': {
      return state.filter(task => task.id !== action.payload);
    }

    case 'tasks/toggleCompleted': {
      return state.map(task =>
        task.id !== action.payload
          ? task
          : { ...task, completed: !task.completed },
      );
    }

    default:
      return state.tasks;
  }
};

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter': {
      return {
        ...state,
        status: action.payload,
      };
    }
    default:
      return state.filters;
  }
};

export const rootReducer = (state = {}, action) => {
  return {
    tasks: tasksReducer(state.tasks, action),
    filter: filtersReducer(state.filters, action),
  };
};
