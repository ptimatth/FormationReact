import { ADD_TODO, EDIT_TODO, LOAD_TODO, TODO_LOADED } from './todo.action';

export const initialState = {
  list: [],
  loading: false,
  loaded: false,
};

export function TodosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: state.list.length + 1,
        isDone: false,
        title: action.title,
      };
      return {
        ...state,
        list: [
          ...state.list,
          newTodo,
        ],
      };
      break;
    case EDIT_TODO:
      return {
        ...state,
        list: action.list,
      };
      break;
    case LOAD_TODO:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
      break;
    case TODO_LOADED:
      return {
        ...state,
        list: action.list,
        loading: false,
        loaded: true,
      };
      break;
    default:
      return state;
  }
}
