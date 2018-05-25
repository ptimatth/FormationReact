import todoItems from '../mock/todo-items.json';

export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const LOAD_TODO = 'LOAD_TODO';
export const TODO_LOADED = 'TODO_LOADED';

export function addTodo(title) {
  return {
    type: ADD_TODO,
    title,
  };
}

export function editTodo(todo, todoList) {
  console.log(todoList);
  todo.isDone = !todo.isDone;
  const newTodoList = todoList.filter(todoItem => todoItem.id === todo.id)
    .sort((a, b) => a.id - b.id);
  newTodoList.push(todo);
  return {
    type: EDIT_TODO,
    list: newTodoList,
  };
}

export function todoLoaded(todos) {
  return {
    type: TODO_LOADED,
    list: todos,
  };
}

export function loadTodo() {
  return (dispatch) => {
    dispatch({ type: LOAD_TODO });
    return new Promise((resolve) => {
      setTimeout(() => resolve(todoItems), 1000);
    }).then(datas => dispatch(todoLoaded(datas)));
  };
}
