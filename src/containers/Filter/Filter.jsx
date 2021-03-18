import React from 'react'
import { Footer, Navbar, RecommendedCard, VideoCard } from '../../common'
import styles from './Filter.module.scss'
import defaultBG from '../../assests/images/img_50.jpg'

export const Filter = () => {
	return (
		<section className={styles.filter}>
			<Navbar />
			<div className={styles.banner}>
				<img src={defaultBG} />
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
					<VideoCard size="large" />
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
