import React from 'react'
import styles from './VideoCard.module.scss'
import defaultImage from '../../assets/images/img_64.jpg'
import { Popover } from 'antd'
import { CaretRightOutlined, InfoOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'

export const VideoCard = ({ size, data }) => {
	console.log(data)
	const randomNumber = Math.floor(Math.random() * (10 - 8)) + 8
	return (
		<div className={`${styles.videoCard} ${styles[size]}`}>
			<Popover
				placement="right"
				content={
					<div className={styles.back}>
						<div className={styles.inner}>
							<div className={styles.content}>
								<span className={styles.score}>
									{randomNumber}
								</span>
								<h3 className={styles.title}>
									{data && data.name}
								</h3>
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
										{data && data.duration} phút
									</span>
								</div>
								<div className={styles.desc}>
									<p>{data && data.description}</p>
								</div>
								<div className={styles.filterGroup}>
									<label>Năm phát hành : </label>
									<div className={styles.fieldContent}>
										<a href="/">
											{data && data.release_year}
										</a>
									</div>
								</div>
								<div className={styles.filterGroup}>
									<label>Quốc gia : </label>
									<div className={styles.fieldContent}>
										<a href="/">{data && data.country}</a>
									</div>
								</div>
								<div className={styles.filterGroup}>
									<label>Năm : </label>
									<div className={styles.fieldContent}>
										<a href="/">
											{data && data.release_year}
										</a>
									</div>
								</div>
								<div className={styles.filterGroup}>
									<label>Thể loại : </label>
									<div className={styles.fieldContent}>
										<a href="/">Cartoon, </a>
										<a href="/">Action, </a>
										<a href="/">Super, </a>
									</div>
								</div>
								<div className={styles.filterGroup}>
									<label>Diễn viên : </label>
									<div className={styles.fieldContent}>
										{data &&
											data.actor.map((e, index) => (
												<a href="/" key={index}>
													{e + ' , '}
												</a>
											))}
									</div>
								</div>
								<div className={styles.filterGroup}>
									<label>Đạo diễn : </label>
									<div className={styles.fieldContent}>
										<a href="/">{data && data.director}</a>
									</div>
								</div>
							</div>
							<div className={styles.button}>
								<a href="/" className={styles.btnTrailer}>
									<CaretRightOutlined /> Trailer
								</a>
								<a href="/" className={styles.btnDetail}>
									<InfoOutlined /> Chi tiết
								</a>
							</div>
						</div>
					</div>
				}
			>
				<div className={styles.front}>
					<div className={styles.poster}>
						{data ? (
							<Link to={`/video/${data && data.slug}`}>
								<img
									src={data ? data.poster : defaultImage}
									alt="something"
								/>
							</Link>
						) : (
							<Skeleton width={140} height={230} />
						)}

						{data && (
							<span className={styles.score}>{randomNumber}</span>
						)}
					</div>
					<div className={styles.content}>
						<h3 className={styles.title}>{data && data.name}</h3>
						<div className={styles.releaseDate}>
							{data && data.release_year}
						</div>
					</div>
				</div>
			</Popover>
		</div>
	)
}

VideoCard.propTypes = {
	size: PropTypes.string,
	data: PropTypes.object,
}
