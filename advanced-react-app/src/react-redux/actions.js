export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};

let todoId = 0;

export function addTodo(text) {
	return { type: ADD_TODO, text, id: todoId++ };//对象简写，表示key和value名字相同
}

export function toggleTodo(id) {
	return { type: TOGGLE_TODO, id };
}

export function setVisibilityFilter(filter) {
	return { type: SET_VISIBILITY_FILTER, filter };
}