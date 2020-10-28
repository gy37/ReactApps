import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './redditReducers'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
	//createStore(reducer, [initialState], enhancer)
	//用来创建一个redux store用来存放应用中的所有state tree，state tree唯一
	//reducer(state, action)
	//initialState初始state
	//enhancer强化函数，返回一个经过enhancer的crateStore函数
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(//将两个中间件绑定到createStore上，最后创建出来的store可以支持异步和打印日志
      thunkMiddleware,
      loggerMiddleware
    )
  )
}