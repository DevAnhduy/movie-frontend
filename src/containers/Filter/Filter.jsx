import React from 'react'
import { Footer, Navbar, RecommendedCard, VideoCard } from '../../common'
import styles from './Filter.module.scss'
import defaultBG from '../../assets/images/img_50.jpg'
import { Pagination } from 'antd'

export const Filter = () => {
	return (
		<section className={styles.filter}>
			<Navbar />
			<div className={styles.banner}>
				<img src={defaultBG} alt="banner" />
			</div>
			<div className={styles.content}>
				<div className={styles.listMovie}>
					<VideoCard size="large" />
					<VideoCard size="large" />
					<VideoCard size="large" />
					<VideoCard size="large" />
					<VideoCard size="large" />
					<VideoCard size="large" />
					<VideoCard size="large" />
					<VideoCard size="large" />
					<VideoCard size="large" />
					<Pagination total={50} current={1} />
				</div>
				<div className={styles.recommended}>
					<RecommendedCard />
					<RecommendedCard />
					<RecommendedCard />
					<RecommendedCard />
					<RecommendedCard />
					<RecommendedCard />
				</div>
			</div>
			<Footer />
		</section>
	)
}
