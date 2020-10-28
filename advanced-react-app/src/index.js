import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './react-redux/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import todoApp from './react-redux/reducers'
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './react-redux/actions'
import { Provider } from 'react-redux'
import Root from './redux-thunk/Root';


//store用来连接action和reducer
//1.维持应用的state 2.getstate获取state 3.dispatch(action)更新state 4.subscribe(listener)注册监听器，并返回注销函数
//每个redux应用只有一个单一的store
let store = createStore(todoApp);

// 打印初始状态
console.log(store.getState())

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// 发起一系列 action
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(toggleTodo(2))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// 停止监听 state 更新
unsubscribe();


//严格的单项数据流是redux的设计核心
//redux中数据的生命周期：
//1.store.dispatch(action)，可以在任何地方调用 
//2.store调用传入的reducer函数，reducer传入原始state和action返回更新后的state
//3.根reducer把多个子reducer的输出合并成一个state树
//4.redux store保存了根reducer返回的state树





//Todo Demo
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  	<App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//Reddit Demo
ReactDOM.render(
  <Root />,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
