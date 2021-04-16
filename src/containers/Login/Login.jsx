import React, { useContext, useEffect, useState } from 'react'
import { Form, Input } from 'antd'
import { ButtonCommon, LoginWithGoogle, LoginWithFacebook } from '../../common'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import styles from './Login.module.scss'
import { UserContext } from '../../context/user.context'
import api from '../../api/index.api'
import PropTypes from 'prop-types'
import { ROUTE } from '../../utils/constant'
import {
	showMessageError,
	showMessageSuccess,
} from '../../utils/function.utils'

const LoginComponent = ({ history }) => {
	const [form] = Form.useForm()
	const [isLoading, setIsLoading] = useState(false)
	const [, setUserContext] = useContext(UserContext)

	useEffect(() => {
		const token = window.localStorage.getItem('token')
		if (token) {
			const getUserProfile = async () => {
				const result = await api.userApi.getMe()

				if (result) {
					setUserContext(result.data)
					history.push(`${ROUTE.USER}${ROUTE.PROFILE}`)
				}
			}
			getUserProfile()
		}
		setIsLoading(false)
	}, [history, setUserContext])

	const onSubmit = async () => {
		setIsLoading(true)
		try {
			const values = await form.validateFields()
			await api.userApi.login(values)
			try {
				const profile = await api.userApi.getMe()

				if (profile) {
					showMessageSuccess()
					history.push('/')
				} else throw new Error('User not a admin')
			} catch (err) {
				console.debug('result: ', err)
				showMessageError()
				setIsLoading(false)
			}
		} catch (err) {
			console.debug('result: ', err)
			showMessageError()
			setIsLoading(false)
		}
	}

	return (
		<section className={styles.loginWrap}>
			<div className={styles.cardContainer}>
				<div className={styles.titleForm}>VIEW MOVIE</div>
				<div className={styles.socialLogin}>
					<LoginWithGoogle />
					<LoginWithFacebook />
				</div>
				<Form
					form={form}
					name="dynamic_rule"
					className={styles.contentForm}
				>
					<Form.Item
						className={styles.formItemCustom}
						name="authEmail"
						type="string"
						rules={[
							{ transform: value => (value ? value.trim() : '') },
							{
								required: true,
								message: 'Tài khoản không được bỏ trống!',
							},
						]}
					>
						<Input
							placeholder="Tài khoản"
							type="string"
							autoFocus
							prefix={<UserOutlined />}
						/>
					</Form.Item>

					<Form.Item
						className={styles.formItemCustom}
						name="password"
						type="password"
						rules={[
							{ transform: value => (value ? value.trim() : '') },
							{
								required: true,
								message: 'Mật khẩu không được bỏ trống',
							},
						]}
					>
						<Input.Password
							placeholder="Mật khẩu"
							type="password"
							prefix={<LockOutlined />}
						/>
					</Form.Item>

					<Form.Item className={styles.formItemBtn}>
						<ButtonCommon
							type="primary"
							loading={isLoading}
							onClick={onSubmit}
							size="small"
						>
							Đăng nhập
						</ButtonCommon>
					</Form.Item>
				</Form>
			</div>
		</section>
	)
}

LoginComponent.propTypes = {
	history: PropTypes.object,
}

export const LoginPage = LoginComponent
