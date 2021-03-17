import React from 'react'
import styles from './Footer.module.scss'
import { FooterColumn } from './FooterColumn/FooterColumn'

export const Footer = () => {
	return (
		<section className={styles.footer}>
			<div className={styles.content}>
				<FooterColumn />
				<FooterColumn />
				<FooterColumn />
				<FooterColumn />
			</div>
		</section>
	)
}
