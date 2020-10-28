import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'
import { IndexLink } from 'react-router'

export default React.createClass({
  render() {
    return (
    	<div>
    		<h1>React Router Tutorial</h1>
    		<ul role="nav">
					<li><Link to="/about" activeStyle={{ color: 'black', textDecoration:'none' }}>About</Link></li>
					<li><Link to="/repos" activeStyle={{ color: 'black' }}>Repos</Link></li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/repos">Repos</NavLink></li>
          {/*IndexLink只有主页被渲染时，才会设置指定的样式*/}
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
    		</ul>
    		{this.props.children}
    	</div>
    );
  }
})
