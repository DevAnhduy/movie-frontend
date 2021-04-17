import React, { useContext, useEffect, useState } from 'react'
import { Form, Input, message } from 'antd'
import { ButtonCommon, LoginWithGoogle } from '../../common'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import styles from './Register.module.scss'
import { UserContext } from '../../context/user.context'
import api from '../../api/index.api'
import PropTypes from 'prop-types'
import { ROUTE } from '../../utils/constant'
import {
	showMessageError,
	showMessageSuccess,
} from '../../utils/function.utils'

const RegisterComponent = ({ history }) => {
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

			if (values.password !== values.confirmPassword) {
				message.error('Mật khẩu xác thực không trùng với mật khẩu')
				setIsLoading(false)
			} else {
				values.social_id = Math.floor(Math.random() * 1000000)
				values.create_type = 'web'

				try {
					const rs = await api.authApi.register(values)

					if (rs) {
						message.success('Tạo tài khoản thành công')
						setIsLoading(false)
					}
				} catch (err) {
					console.debug('result: ', err)
					showMessageError()
					setIsLoading(false)
				}
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
				</div>
				<Form
					form={form}
					name="dynamic_rule"
					className={styles.contentForm}
				>
					<Form.Item
						className={styles.formItemCustom}
						name="email"
						type="email"
						rules={[
							{ transform: value => (value ? value.trim() : '') },
							{
								required: true,
								message: 'Email không được bỏ trống!',
							},
						]}
					>
						<Input
							placeholder="Email"
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

					<Form.Item
						className={styles.formItemCustom}
						name="confirmPassword"
						type="confirmPassword"
						rules={[
							{ transform: value => (value ? value.trim() : '') },
							{
								required: true,
								message: 'Mật khẩu không được bỏ trống',
							},
						]}
					>
						<Input.Password
							placeholder="Xác thực mật khẩu"
							type="confirmPassword"
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
							Đăng ký
						</ButtonCommon>
					</Form.Item>
				</Form>
			</div>
		</section>
	)
}

RegisterComponent.propTypes = {
	history: PropTypes.object,
}

export const RegisterPage = RegisterComponent
