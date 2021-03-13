import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

export const ButtonCommon = ({
	onClick,
	type,
	loading,
	children,
	containerStyle,
	icon,
	iconColor,
	ghost,
	htmlType,
	size,
}) => {
	const handleClick = e => {
		e.stopPropagation()
		onClick && onClick()
	}

	return (
		<Button
			className="custom-btn"
			htmlType={htmlType}
			ghost={ghost}
			containerStyle={containerStyle}
			icon={icon}
			iconColor={iconColor}
			type={type}
			loading={loading}
			onClick={handleClick}
			size={size}
		>
			{children}
		</Button>
	)
}

ButtonCommon.propTypes = {
	onClick: PropTypes.func,
	type: PropTypes.string,
	loading: PropTypes.bool,
	children: PropTypes.node,
	containerStyle: PropTypes.any,
	icon: PropTypes.node,
	iconColor: PropTypes.any,
	ghost: PropTypes.bool,
	htmlType: PropTypes.string,
	size: PropTypes.string,
}
