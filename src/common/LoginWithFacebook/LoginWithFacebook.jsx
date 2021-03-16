import { message } from 'antd'
import React from 'react'
import FacebookLogin from 'react-facebook-login'
import { FacebookOutlined } from '@ant-design/icons'
import { MESSAGE, ROUTE } from '../../utils/constant'
import styles from './LoginWithFacebook.module.scss'
import API from '../../api/index.api'
import { withRouter } from 'react-router-dom'

const LoginWithFacebookComponent = ({ history }) => {
	const handleLoginDone = async response => {
		try {
			if (!response) {
				message.error(MESSAGE.LOGIN_FAIL)
				return
			} else {
				const { email, name, userId } = response
				const avatar = response.picture.data.url
				const userData = {
					email,
					name,
					avatar,
					social_id: userId,
					create_type: 'facebook',
				}
				const rs = await API.authApi.loginWithFacebook(userData)
				if (rs) {
					window.localStorage.setItem('token', rs.token)
					history.push(`${ROUTE.USER}${ROUTE.PROFILE}`)
				}
			}
		} catch (err) {
			console.log(err)
			message.error(MESSAGE.LOGIN_FAIL)
		}
	}

	return (
		<div className={styles.authWithFacebook}>
			<FacebookLogin
				appId="436480034296358"
				fields="name,email,picture"
				scope="public_profile"
				callback={handleLoginDone}
				icon={<FacebookOutlined />}
			/>
		</div>
	)
}

export const LoginWithFacebook = withRouter(LoginWithFacebookComponent)
