import React from 'react'
import styles from './Footer.module.scss'
import { FooterColumn } from './FooterColumn/FooterColumn'

const firstColumn = {
	items: ['Trang web xem phim số 1 Việt Nam'],
}

const secondColumn = {
	title: 'Hỗ trợ khách hàng',
	items: ['Trang chủ', 'Về chúng tôi', 'Liên hệ'],
}

const thirdColumn = {
	title: 'Phim gần đây',
	items: ['Doctor Strange assembles with the Avengers'],
}

const fourColumn = {
	title: 'Liên hệ với chúng tôi',
	items: ['14 Cao Lỗ, Quận 8, TPHCM', 'movie247@gmail.com', '123123123'],
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
