import React from 'react'
import styles from './Logo.module.scss'
import videoIcon from '../../assets/images/logo.svg'
import { ROUTE } from '../../utils/constant'

export const Logo = () => {
	return (
		<div className={styles.logo}>
			<a href={ROUTE.DASHBOARD}>
				<img src={videoIcon} alt="movie247 icon" />
				<p className={styles.logoName}>Movie247</p>
			</a>
		</div>
	)
}
