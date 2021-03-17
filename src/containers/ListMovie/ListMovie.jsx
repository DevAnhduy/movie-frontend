import React from 'react'
import { VideoCard } from '../../common'
import styles from './ListMovie.module.scss'
import defaultBanner from '../../assests/images/img_64.jpg'

export const ListMovie = () => {
	return (
		<section className={styles.listMovieWrapper}>
			<div className={styles.listMovie}>
				<div className={styles.filter}>
					<ul>
						<li className={styles.active}>
							<a>Action</a>
						</li>
						<li>
							<a>Adventure</a>
						</li>
						<li>
							<a>Horror</a>
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
					<img src={defaultBanner} />
				</div>
				<div className={styles.banner}>
					<img src={defaultBanner} />
				</div>
			</div>
		</section>
	)
}
