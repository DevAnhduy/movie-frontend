import React from 'react'
import styles from './VideoCard.module.scss'
import defaultImage from '../../assets/images/img_64.jpg'
import { Popover } from 'antd'
import { CaretRightOutlined, InfoOutlined } from '@ant-design/icons'

export const VideoCard = ({ size }) => {
	return (
		<div className={`${styles.videoCard} ${styles[size]}`}>
			<Popover
				placement="right"
				content={
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
										Sed ut perspiciatis unde omnis iste
										natus error sit voluptatem accusantium
										doloremque laudantium, totam rem
										aperiam, ...
									</p>
								</div>
								<div className={styles.filterGroup}>
									<label>Release Date : </label>
									<div className={styles.fieldContent}>
										<a href="/">27/1/2021</a>
									</div>
								</div>
								<div className={styles.filterGroup}>
									<label>Nation : </label>
									<div className={styles.fieldContent}>
										<a href="/">Brazil, </a>
										<a href="/">USA, </a>
										<a href="/">Japan</a>
									</div>
								</div>
								<div className={styles.filterGroup}>
									<label>Year : </label>
									<div className={styles.fieldContent}>
										<a href="/">2019</a>
									</div>
								</div>
								<div className={styles.filterGroup}>
									<label>Category : </label>
									<div className={styles.fieldContent}>
										<a href="/">Cartoon, </a>
										<a href="/">Action, </a>
										<a href="/">Super, </a>
									</div>
								</div>
								<div className={styles.filterGroup}>
									<label>Actor : </label>
									<div className={styles.fieldContent}>
										<a href="/">123, </a>
										<a href="/">Duy, </a>
										<a href="/">Anh, </a>
									</div>
								</div>
								<div className={styles.filterGroup}>
									<label>Director : </label>
									<div className={styles.fieldContent}>
										<a href="/">123, </a>
										<a href="/">Duy, </a>
										<a href="/">Anh, </a>
									</div>
								</div>
							</div>
							<div className={styles.button}>
								<a href="/" className={styles.btnTrailer}>
									<CaretRightOutlined /> Trailer
								</a>
								<a href="/" className={styles.btnDetail}>
									<InfoOutlined /> Detail
								</a>
							</div>
						</div>
					</div>
				}
			>
				<div className={styles.front}>
					<div className={styles.poster}>
						<a href="/">
							<img src={defaultImage} alt="something" />
						</a>
						<span className={styles.score}>8.9</span>
					</div>
					<div className={styles.content}>
						<h3 className={styles.title}>Anh Duy</h3>
						<div className={styles.releaseDate}>July 28, 2017</div>
					</div>
				</div>
			</Popover>
		</div>
	)
}
