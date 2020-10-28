//reducer里面必须是纯函数，保持纯净，传入参数相同，返回的state一定相同，单纯的进行计算

import { combineReducers } from 'redux'
import {
	ADD_TODO,
	TOGGLE_TODO,
	SET_VISIBILITY_FILTER,
	VisibilityFilters
} from './actions'

const { SHOW_ALL } = VisibilityFilters;
function visibilityFilter(state = SHOW_ALL, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state;
	}
}

function todos(state = [], action) {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			];
		case TOGGLE_TODO:
			return state.map(todo => {
				return (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
			});
		default:
			return state;
	}
}

//为了代码清晰，把大的state拆分成两个，每个reducer函数中分别管理对应的 子state 部分，根据key来筛选出state中的一部分并处理
//生成函数将每个reducer的值合并成一个大的对象，最后返回的整个对象即为state


// function todoApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }
//使用combineReducers可以简化上面的函数：
const todoApp = combineReducers({
	visibilityFilter,
	todos
});

export default todoApp;