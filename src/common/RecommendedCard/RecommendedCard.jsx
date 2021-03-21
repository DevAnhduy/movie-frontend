import React from 'react'
import styles from './RecommendedCard.module.scss'
import defaultImage from '../../assets/images/img_64.jpg'

export const RecommendedCard = () => {
	return (
		<div className={styles.recommendedCard}>
			<div className={styles.poster}>
				<img src={defaultImage} alt="poster" />
			</div>
			<div className={styles.content}>
				<h2 className={styles.title}>
					<a href="/">Anh Duy</a>
				</h2>
				<div>
					<span className={styles.duration}>02 hours 50 minutes</span>
				</div>
				<div className={styles.category}>
					<span>
						<a href="/">Cartoon , </a>
						<a href="/">Comedy</a>
					</span>
				</div>
				<div className={styles.rating}>
					<ul className={styles.star}>
						<li className={styles.currentRating}></li>
					</ul>
					<span className={styles.rate}>4.5</span>
				</div>
			</div>
		</div>
	)
}
