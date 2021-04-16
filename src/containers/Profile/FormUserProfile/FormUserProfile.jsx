import React from 'react'
import { Form, Input } from 'antd'
import styles from './FormUserProfile.module.scss'
import { FORM_RULE, MESSAGE } from '../../../utils/constant'

const FormUserProfile = ({ user }) => {
	//const [user] = useContext(UserContext)
	const [form] = Form.useForm()

	const inputs = [
		{
			label: 'Email',
			name: 'email',
			rules: [FORM_RULE.EMAIL],
			required: true,
			isReadOnly: true,
		},
		{
			label: 'Name',
			name: 'name',
			required: true,
		},
		{
			label: 'Create type',
			name: 'create_type',
			required: true,
		},
	]

	return (
		<div className={`${styles.formUserProfile} u-form-common`}>
			<div className="u-content">
				<Form
					form={form}
					name="dynamic_rule"
					initialValues={user ? {} : { ...user }}
				>
					{inputs.map(item => (
						<Form.Item
							key={item.name}
							label={item.label}
							name={item.name}
							rules={[
								{
									required: item.required,
									message: MESSAGE.REQUIRED,
								},
								...(item.rules || []),
							]}
						>
							<Input
								placeholder={
									item.placeholder ||
									`Enter ${item.label.toLowerCase()}`
								}
								type={item.type}
								readOnly={item.isReadOnly}
							/>
						</Form.Item>
					))}
				</Form>
			</div>
		</div>
	)
}

export default FormUserProfile
