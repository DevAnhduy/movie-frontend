import React, { useContext, useState } from 'react'
import styles from './Profile.module.scss'
import { DEFAULT_AVATAR } from '../../utils/constant'
import FormUserProfile from './FormUserProfile/FormUserProfile'
import { UserContext } from '../../context/user.context'
import { ButtonCommon } from '../../common'
import { Form, Input } from 'antd'

export const Profile = () => {
	const [userContext] = useContext(UserContext)
	const [isLoading] = useState(false)
	const [form] = Form.useForm()

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
				<Form className={styles.field}>
					<Form.Item label="Email">
						<Input value={userContext && userContext.email} />
					</Form.Item>
					<Form.Item label="Họ tên">
						<Input value={userContext && userContext.name} />
					</Form.Item>
					<Form.Item label="Tạo bởi">
						<Input value={userContext && userContext.create_type} />
					</Form.Item>
				</Form>
				{/* <FormUserProfile user={userContext} /> */}
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
