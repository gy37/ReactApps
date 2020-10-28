import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import About from './About'
import Repos from './Repos'
import Repo from './Repo'
import Home from './Home'

module.exports = (/*parent routes are active when child routes are active*/
  <Route path="/" component={App}>
		{/*Notice how the IndexRoute has no path. It becomes this.props.children of the parent when no other child of the parent matches*/}
		<IndexRoute component={Home} />
		{/*把Repos路由放到App里面，那么在App组件内部通过this.props.children可以获取到Repos组件*/}
		<Route path="/repos" component={Repos}>
			{/*把Repo路由放到Repos里面，那么在Repos组件内部通过this.props.children可以获取到Repo组件*/}
			{/*/repos/:userName/:repoName，url中的参数会被解析为userName和repoName，并且可以组件里面引用*/}
			{/* Note that the parameter name in the route path becomes the property name in the component*/}
			<Route path="/repos/:userName/:repoName" component={Repo} />
		</Route>
		<Route path="/about" component={About} />
	</Route>
);