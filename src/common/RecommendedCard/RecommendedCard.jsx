import React from 'react'
import styles from './RecommendedCard.module.scss'
import defaultBG from '../../assests/images/img_50.jpg'

export const RecommendedCard = () => {
	return (
		<div className={styles.recommendedCard}>
			<div className={styles.poster}>
				<img src={defaultBG} />
			</div>
			<div className={styles.content}>
				<h2 className={styles.title}>
					<a>Anh Duy</a>
				</h2>
				<div>
					<span className={styles.duration}>02 hours 50 minutes</span>
				</div>
				<div className={styles.category}>
					<span>Cartoon</span> ,<span>Comedy</span>
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
