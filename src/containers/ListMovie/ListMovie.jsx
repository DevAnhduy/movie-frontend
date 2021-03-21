import React from 'react'
import { VideoCard } from '../../common'
import styles from './ListMovie.module.scss'
import defaultBanner from '../../assets/images/img_64.jpg'

export const ListMovie = () => {
	return (
		<section className={styles.listMovieWrapper}>
			<div className={styles.listMovie}>
				<div className={styles.filter}>
					<ul>
						<li className={styles.active}>
							<a href="/">Action</a>
						</li>
						<li>
							<a href="/">Adventure</a>
						</li>
						<li>
							<a href="/">Horror</a>
						</li>
					</ul>
				</div>
				<div className={styles.movies}>
					<div className={styles.item}>
						<VideoCard />
					</div>
					<div className={styles.item}>
						<VideoCard />
					</div>
					<div className={styles.item}>
						<VideoCard />
					</div>
					<div className={styles.item}>
						<VideoCard />
					</div>
					<div className={styles.item}>
						<VideoCard />
					</div>
					<div className={styles.item}>
						<VideoCard />
					</div>
					<div className={styles.item}>
						<VideoCard />
					</div>
					<div className={styles.item}>
						<VideoCard />
					</div>
					<div className={styles.item}>
						<VideoCard />
					</div>
					<div className={styles.item}>
						<VideoCard />
					</div>
					<div className={styles.item}>
						<VideoCard />
					</div>
					<div className={styles.item}>
						<VideoCard />
					</div>
					<div className={styles.item}>
						<VideoCard />
					</div>
					<div className={styles.item}>
						<VideoCard />
					</div>
					<div className={styles.item}>
						<VideoCard />
					</div>
					<div className={styles.item}>
						<VideoCard />
					</div>
					<div className={styles.item}>
						<VideoCard />
					</div>
					<div className={styles.item}>
						<VideoCard />
					</div>
					<div className={styles.item}>
						<VideoCard />
					</div>
					<div className={styles.item}>
						<VideoCard />
					</div>
					<div className={styles.item}>
						<VideoCard />
					</div>
					<div className={styles.item}>
						<VideoCard />
					</div>
					<div className={styles.item}>
						<VideoCard />
					</div>
					<div className={styles.item}>
						<VideoCard />
					</div>
					<div className={styles.item}>
						<VideoCard />
					</div>
					<div className={styles.item}>
						<VideoCard />
					</div>
					<div className={styles.item}>
						<VideoCard />
					</div>
				</div>
			</div>
			<div className={styles.bannerWrapper}>
				<div className={styles.banner}>
					<img src={defaultBanner} alt="banner" />
				</div>
				<div className={styles.banner}>
					<img src={defaultBanner} alt="banner" />
				</div>
			</div>
		</section>
	)
}
