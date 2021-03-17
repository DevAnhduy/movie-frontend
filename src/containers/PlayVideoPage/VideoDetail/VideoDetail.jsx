import React from 'react'
import styles from './VideoDetail.module.scss'

export const VideoDetail = () => {
	return (
		<section className={styles.videoDetailWrapper}>
			<div className={styles.videoDetail}>
				<h1 className={styles.header}>Welcome to my page</h1>
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
					<h3>Movie Info</h3>
					<ul className={styles.infoList}>
						<li>
							<label>Actor : </label>
							<span>
								<a>Alexander Cattly</a>
							</span>
						</li>
						<li>
							<label>Director : </label>
							<span>
								<a>Greta Garbo</a>
							</span>
						</li>
						<li>
							<label>Genre : </label>
							<span>
								<a>Drama</a>
							</span>
						</li>
						<li>
							<label>Release : </label>
							<span>
								<a>May 7, 2017</a>
							</span>
						</li>
						<li>
							<label>IMDB Rating : </label>
							<span>
								<a>7.9</a>
							</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}
