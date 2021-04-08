import React from 'react'
import styles from './RecommendedCard.module.scss'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'

export const RecommendedCard = ({ data }) => {
	const randomRating = Math.floor(Math.random() * (10 - 8)) + 8

	return (
		<div className={styles.recommendedCard}>
			{data ? (
				<>
					<div className={styles.poster}>
						<img src={data && data.poster} alt="poster" />
					</div>
					<div className={styles.content}>
						<h2 className={styles.title}>
							<a href="/">{data && data.name}</a>
						</h2>
						<div>
							<span className={styles.duration}>
								{data && data.duration} phút
							</span>
						</div>
						<div className={styles.category}>
							<span>
								{data &&
									data.category.map((ele, index) => (
										<a href="/" key={index}>
											{ele.name} ,
										</a>
									))}
							</span>
						</div>
						<div className={styles.rating}>
							<ul className={styles.star}>
								<li className={styles.currentRating}></li>
							</ul>
							<span className={styles.rate}>{randomRating}</span>
						</div>
					</div>
				</>
			) : (
				<Skeleton width={342} height={160} />
			)}
		</div>
	)
}

RecommendedCard.propTypes = {
	data: PropTypes.any,
}
