import React, { useContext } from 'react'
import styles from './Profile.module.scss'
import { DEFAULT_AVATAR } from '../../utils/constant'
import FormUserProfile from './FormUserProfile/FormUserProfile'
import { UserContext } from '../../context/user.context'

export const Profile = () => {
	const [userContext] = useContext(UserContext)

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
			</div>
		</section>
	)
}
