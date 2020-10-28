import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
  	//{...this.props}复制props到所有使用该组件的地方，不用重复写一些props
    return <Link {...this.props} activeClassName="active"/>
  }
})