import React, { useContext, useEffect, useState } from 'react'
import API from '../../api/index.api'
import { LoadingCommon } from '../../common'
import { UserContext } from '../../context/user.context'
import { withRouter } from 'react-router-dom'
import { ROUTE } from '../../utils/constant'
import { Profile } from '..'

const UserAuthComponent = ({ children, history }) => {
	const [, setUserContext] = useContext(UserContext)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setIsLoading(false)
		const token = window.localStorage.getItem('token')
		if (token) {
			const getUserProfile = async () => {
				const result = await API.userApi.getMe()

				if (result) {
					setUserContext(result.data)
					setIsLoading(false)
				}
			}
			getUserProfile()
		} else {
			history.push(ROUTE.LOGIN)
		}
	}, [setUserContext, history])

	if (isLoading) {
		return <LoadingCommon size="large" isFullHeight />
	} else {
		return <Profile />
		// if (userContext) {
		// 	return <Dashboard />
		// } else {
		// 	return <Redirect to="/login" />
		// }
	}
}

export const UserAuth = withRouter(UserAuthComponent)
