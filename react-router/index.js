import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './modules/routes'


render(//React Router is a component
	<Router history={browserHistory} routes={routes} />,
	document.getElementById('app')
);
