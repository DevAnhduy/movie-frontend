import React from 'react'
import styles from './FooterColumn.module.scss'

export const FooterColumn = () => {
	return (
		<div className={styles.footerColumn}>
			<h4 className={styles.title}>Test</h4>
			<div className={styles.content}>
				<ul className={styles.listItem}>
					<li className={styles.item}>Home</li>
					<li className={styles.item}>Movie</li>
					<li className={styles.item}>TV Show</li>
				</ul>
			</div>
		</div>
	)
}
