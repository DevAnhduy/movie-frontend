import React from 'react'
import styles from './Footer.module.scss'
import { FooterColumn } from './FooterColumn/FooterColumn'

const firstColumn = {
	items: [
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
	],
}

const secondColumn = {
	title: 'Custom Services',
	items: ['Home', 'About us', 'Contact'],
}

const thirdColumn = {
	title: 'Recent Posts',
	items: [
		'Doctor Strange assembles with the Avengers',
		'5 movies to watch this week (29 Sep 2016)',
	],
}

const fourColumn = {
	title: 'Contact Us',
	items: ['Cao Lo', 'abc@gmail.com', '123123123'],
}
export const Footer = () => {
	return (
		<section className={styles.footer}>
			<div className={styles.content}>
				<FooterColumn items={firstColumn.items} logo />
				<FooterColumn {...secondColumn} />
				<FooterColumn {...thirdColumn} />
				<FooterColumn {...fourColumn} />
			</div>
		</section>
	)
}
