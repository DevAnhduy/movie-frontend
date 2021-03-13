import React from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import styles from './LoadingCommon.module.scss'

export const LoadingCommon = ({
	size = 'small',
	sizeIcon = 5,
	delay,
	isFullHeight = false,
}) => {
	const loadingIcon = (
		<LoadingOutlined
			style={{ fontSize: `${sizeIcon.toString()}rem` }}
			spin
		/>
	)
	return (
		<Spin
			indicator={loadingIcon}
			size={size}
			delay={delay}
			className={`${styles.loadingCommon} ${
				isFullHeight ? styles.fullHeight : ''
			}`}
		/>
	)
}

LoadingCommon.propTypes = {
	size: PropTypes.string,
	sizeIcon: PropTypes.string,
	delay: PropTypes.number,
	isFullHeight: PropTypes.bool,
}
