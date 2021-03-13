import { message } from 'antd'
import React from 'react'
import GoogleLogin from 'react-google-login'
import { MESSAGE, ROUTE } from '../../utils/constant'
import styles from './LoginWithGoogle.module.scss'
import API from '../../api/index.api'
import { withRouter } from 'react-router-dom'

const LoginWithGoogleComponent = ({ history }) => {
	const handleLoginDone = async response => {
		try {
			if (!response || !response.tokenId || !response.profileObj) {
				return
			} else {
				const { email, name, imageUrl, googleId } = response.profileObj
				const userData = {
					email,
					name,
					avatar: imageUrl,
					social_id: googleId,
					create_type: 'google',
				}
				const rs = await API.authApi.loginWithGoogle(userData)
				if (rs) {
					window.localStorage.setItem('token', rs.token)
					history.push(`${ROUTE.USER}${ROUTE.PROFILE}`)
				}
			}
		} catch (err) {
			message.error(MESSAGE.LOGIN_FAIL)
		}
	}

	return (
		<div className={styles.authWithGoogle}>
			<GoogleLogin
				clientId="1050284969021-phorn8kerf7hf279rvfnvhk8k7ifdmiv.apps.googleusercontent.com"
				buttonText="Login with google"
				onSuccess={handleLoginDone}
				onFailure={handleLoginDone}
				cookiePolicy={'single_host_origin'}
			/>
		</div>
	)
}

export const LoginWithGoogle = withRouter(LoginWithGoogleComponent)
