import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss'
import { ROUTE } from './utils/constant'
import { UserAuth, LoginPage, Profile } from './containers'
import { UserContext } from './context/user.context'

function App() {
	const [userContext, setUserContext] = useState('')

	return (
		<div className="app">
			<UserContext.Provider value={[userContext, setUserContext]}>
				<Switch>
					<Route exact path={ROUTE.LOGIN} component={LoginPage} />
					<UserAuth>
						<Route
							exact
							path={`${ROUTE.USER}${ROUTE.PROFILE}`}
							component={Profile}
						/>
					</UserAuth>
				</Switch>
			</UserContext.Provider>
		</div>
	)
}

export default App
