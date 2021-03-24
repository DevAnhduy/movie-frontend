import React from 'react'
import { Logo } from '../..'
import styles from './FooterColumn.module.scss'
import PropTypes from 'prop-types'

export const FooterColumn = ({ title, items, logo }) => {
	return (
		<div className={styles.footerColumn}>
			{logo ? <Logo /> : ''}
			<h4 className={styles.title}>{title}</h4>
			<div className={styles.content}>
				<ul className={styles.listItem}>
					{items &&
						items.map((item, index) => (
							<li className={styles.item} key={index}>
								{item}
							</li>
						))}
				</ul>
			</div>
		</div>
	)
}

FooterColumn.propTypes = {
	title: PropTypes.string,
	items: PropTypes.array,
	logo: PropTypes.bool,
}
