export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}

function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data,
    receivedAt: Date.now()
  }
}

// 来看一下我们写的第一个 thunk action 创建函数！
// 虽然内部操作不同，你可以像其它 action 创建函数 一样使用它：
// store.dispatch(fetchPosts('reactjs'))

//在action里面进行网络请求，在请求的流程中dispatch不同的action，更新reducer中保存的state的值
function fetchPosts(subreddit) {

  // 返回的action为函数时，这个方法会接收到两个参数，第一个是dispatch，等同于dispatch，第二个是getState，
  // Thunk middleware 知道如何处理函数。
  // 这里把 dispatch 方法通过参数的形式传给函数，
  // 以此来让它自己也能 dispatch action。
  return dispatch => {
    dispatch(requestPosts(subreddit))

    // thunk middleware 调用的函数可以有返回值，
    // 它会被当作 dispatch 方法的返回值传递。
    // 这个案例中，我们返回一个等待处理的 promise。
    // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。

    //这里遇到一个跨域问题，在package.json里面添加代理没解决，使用http-proxy-middleware中间件解决
    return fetch(`/api/api/v2/data/category/GanHuo/type/${subreddit}/page/1/count/10`)
      .then(response => response.json())

        // 可以多次 dispatch！
        // 这里，使用 API 请求结果来更新应用的 state。
      .then(json => dispatch(receivePosts(subreddit, json)))
  }
}

function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate//如果posts无效才可以请求
  }
}

export function fetchPostsIfNeeded(subreddit) {

  // 注意这个函数也接收了 getState() 方法
  // 它让你选择接下来 dispatch 什么。
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      // 在 thunk 里 dispatch 另一个 thunk！
      return dispatch(fetchPosts(subreddit))
    }
  }
}