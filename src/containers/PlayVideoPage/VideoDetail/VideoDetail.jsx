import React from 'react'
import styles from './VideoDetail.module.scss'
import PropTypes from 'prop-types'

export const VideoDetail = ({ detail }) => {
	return (
		<section className={styles.videoDetailWrapper}>
			<div className={styles.videoDetail}>
				<h1 className={styles.header}>{detail && detail.name}</h1>
				<div className={styles.listServer}>
					<div className={styles.serverItem}>
						<div className={styles.name}>
							<span>Youtube</span>
						</div>
						<div className={styles.options}>
							<span className={styles.active}>Part 1</span>
							<span>Part 2</span>
						</div>
					</div>
					<div className={styles.serverItem}>
						<div className={styles.name}>
							<span>Vimeo</span>
						</div>
						<div className={styles.options}>
							<span className={styles.active}>Part 1</span>
							<span>Part 2</span>
						</div>
					</div>
				</div>
				<div className={styles.description}>
					<h3>Thông tin phim</h3>
					<ul className={styles.infoList}>
						<li>
							<label>Diễn viên : </label>
							<span>
								{detail &&
									detail.actor.map((item, index) => {
										return (
											<a href="/" key={index}>
												{' ' + item + ' , '}
											</a>
										)
									})}
							</span>
						</li>
						<li>
							<label>Đạo diễn : </label>
							<span>
								<a href="/">{detail && detail.director}</a>
							</span>
						</li>
						<li>
							<label>Thể loại : </label>
							<span>
								{detail &&
									detail.category.map((item, index) => (
										<a href="/" key={index}>
											{' ' + item.name + ' , '}
										</a>
									))}
							</span>
						</li>
						<li>
							<label>Năm ra mắt : </label>
							<span>
								<a href="/"> {detail && detail.release_year}</a>
							</span>
						</li>
						<li>
							<label>IMDB Rating : </label>
							<span>
								<a href="/">7.9</a>
							</span>
						</li>
						<li>
							<label>Mô tả :</label>
							<span> {detail && detail.description}</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

VideoDetail.propTypes = {
	detail: PropTypes.any,
}
