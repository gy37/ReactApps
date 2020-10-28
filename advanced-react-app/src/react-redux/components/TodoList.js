import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {/*onClick={() => onTodoClick(todo.id)}这种写法简单，但是每次都会创建一个新的方法，最好用一个方法代替*/}
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
)

//PropTypes.arrayOf指定属性为数组，且数组元素为指定类型
//PropTypes.shape指定属性为对象，且指定对象的属性类型
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList