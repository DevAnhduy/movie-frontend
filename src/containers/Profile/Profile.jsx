import React, { useContext, useState } from 'react'
import styles from './Profile.module.scss'
import { DEFAULT_AVATAR } from '../../utils/constant'
import FormUserProfile from './FormUserProfile/FormUserProfile'
import { UserContext } from '../../context/user.context'
import { ButtonCommon } from '../../common'

export const Profile = () => {
	const [userContext] = useContext(UserContext)
	const [isLoading] = useState(false)

	const onLogout = () => {
		window.localStorage.removeItem('token')
		window.location.href = '/login'
	}

	return (
		<section className={styles.profile}>
			<div className={styles.cardContainer}>
				<span className={`${styles.type} ${styles.pro}`}>PRO</span>
				<img
					className={styles.avatar}
					src={userContext ? userContext.avatar : DEFAULT_AVATAR}
					alt="currentUser"
				/>
				<FormUserProfile user={userContext} />
				<ButtonCommon
					type="primary"
					loading={isLoading}
					onClick={onLogout}
					size="small"
				>
					Đăng xuất
				</ButtonCommon>
			</div>
		</section>
	)
}
