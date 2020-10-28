import { combineReducers } from 'redux'
import {
  SELECT_SUBREDDIT,
  INVALIDATE_SUBREDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS
} from './redditActions'

//reducer函数，接受旧的state和action，返回新的state
function selectedSubreddit(state = 'iOS', action) {
  switch (action.type) {
  case SELECT_SUBREDDIT:
    return action.subreddit
  default:
    return state
  }
}

function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT://点击刷新
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_POSTS://请求数据
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS://接收数据
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

//将state.postsBySubreddit.subreddit子对象的状态交给posts来管理，传入子state和action，返回子对象
function postsBySubreddit(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action)
      })
      //等价于下面的写法
   		// nextState = {}
			// nextState[action.subreddit] = posts(state[action.subreddit], action)
			// return Object.assign({}, state, nextState)
    default:
      return state
  }
}

//state结构，最好在最开始写出来
//设计state结构，之后再开始写reducer中的方法
// {
// 	selectedSubreddit: "subreddit",
// 	postsBySubreddit: {
// 		subreddit: {
// 	    isFetching: false,
// 	    didInvalidate: false,
// 	    items: [],
// 	    lastUpdated: null
//   	}
// 	}
// }
const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit
})

export default rootReducer