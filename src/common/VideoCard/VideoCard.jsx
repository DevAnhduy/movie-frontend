import React from 'react'
import styles from './VideoCard.module.scss'
import defaultImage from '../../assests/images/img_64.jpg'

export const VideoCard = () => {
	return (
		<div className={styles.videoCard}>
			<div className={styles.front}>
				<div className={styles.poster}>
					<a href="#">
						<img src={defaultImage} />
					</a>
					<span className={styles.score}>8.9</span>
				</div>
				<div className={styles.content}>
					<h3 className={styles.title}>Anh Duy</h3>
					<div className={styles.releaseDate}>July 28, 2017</div>
				</div>
			</div>
			<div className={styles.back}>
				<div className={styles.inner}>
					<div className={styles.content}>
						<span className={styles.score}>8.3</span>
						<h3 className={styles.title}>Anh Duy</h3>
						<div className={styles.rating}>
							<div className={styles.ratingInner}>
								<div className={styles.ratingStars}>
									<span
										className={styles.currentRating}
									></span>
								</div>
								<div className={styles.userRating}>
									<span>( 28 Votes )</span>
								</div>
							</div>
						</div>
						<div className={styles.meta}>
							<span className={styles.duration}>
								02 hours 40 minutes
							</span>
						</div>
						<div className={styles.desc}>
							<p>
								Sed ut perspiciatis unde omnis iste natus error
								sit voluptatem accusantium doloremque
								laudantium, totam rem aperiam, ...
							</p>
						</div>
					</div>
					<div className={styles.button}>
						<a className={styles.btnTrailer}>Trailer</a>
						<a className={styles.btnDetail}>Detail</a>
					</div>
				</div>
			</div>
		</div>
	)
}
