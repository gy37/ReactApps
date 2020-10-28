import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  selectSubreddit,
  fetchPostsIfNeeded,
  invalidateSubreddit
} from './redditActions'
import Picker from './components/Picker'
import Posts from './components/Posts'

class AsyncApp extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {//加载完成，发送请求
    const { dispatch, selectedSubreddit } = this.props
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }

  //componentWillReceiveProps在初始化render的时候不会执行，它会在Component接受到新的状态(Props)时被触发
  //一般用于父组件状态更新时子组件的重新渲染
  componentWillReceiveProps(nextProps) {//props将要变化时，重新发送请求
    if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = nextProps
      dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }
  }

  handleChange(nextSubreddit) {
    this.props.dispatch(selectSubreddit(nextSubreddit))
  }

  handleRefreshClick(e) {
    e.preventDefault()

    const { dispatch, selectedSubreddit } = this.props
    dispatch(invalidateSubreddit(selectedSubreddit))
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }

  render() {
    const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props
    return (
      <div>
        <Picker value={selectedSubreddit}
                onChange={this.handleChange}
                options={[ 'iOS', 'Android', 'Flutter' ]} />
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
          {!isFetching &&
            <button onClick={this.handleRefreshClick}>
              Refresh
            </button>
          }
        </p>
        {isFetching && posts.length === 0 &&
          <h2>Loading...</h2>
        }
        {!isFetching && posts.length === 0 &&
          <h2>Empty.</h2>
        }
        {posts.length > 0 &&
          <div style={{ opacity: isFetching ? 0.1 : 1 }}>
            <Posts posts={posts} />
          </div>
        }
      </div>
    )
  }
}

AsyncApp.propTypes = {
  selectedSubreddit: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired//没有使用mapDispatchToProps，默认传递的属性？最好还是实现mapDispatchToProps映射到自定义方法上
}

function mapStateToProps(state) {
  const { selectedSubreddit, postsBySubreddit } = state//state中保存的值
  const {
    isFetching,
    lastUpdated,
    items: posts//es6解构赋值，将右边对象中item属性的值赋值给posts
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  }

  return {
    selectedSubreddit,
    posts,//此时posts即为原来对象中的items
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(AsyncApp)