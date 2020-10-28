import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Posts extends Component {
  render() {
    return (
      <ul>
        {this.props.posts.map((post, i) =>
          <li key={i}>
            <a href={post.url} target="_blank">{post.title}</a>
            <p style={{fontSize: 14, width: 300}}>{post.desc}</p>
          </li>
        )}
      </ul>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}