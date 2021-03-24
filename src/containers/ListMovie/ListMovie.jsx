import React from 'react'
import { ButtonCommon, VideoCard } from '../../common'
import styles from './ListMovie.module.scss'
import PropTypes from 'prop-types'
import banner1 from '../../assets/images/banner_1.jpg'
import banner2 from '../../assets/images/banner_2.jpg'
import banner3 from '../../assets/images/banner_3.jpg'

export const ListMovie = ({ listMovies, onViewMore }) => {
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
					{listMovies &&
						listMovies.map((movie, index) => (
							<div className={styles.item} key={index}>
								<VideoCard data={movie} />
							</div>
						))}
				</div>
				<div className={styles.btnViewmore}>
					<ButtonCommon type="primary" onClick={onViewMore}>
						Xem thêm
					</ButtonCommon>
				</div>
			</div>
			<div className={styles.bannerWrapper}>
				<div className={styles.banner}>
					<img src={banner1} alt="banner" />
				</div>
				<div className={styles.banner}>
					<img src={banner2} alt="banner" />
				</div>
				<div className={styles.banner}>
					<img src={banner3} alt="banner" />
				</div>
			</div>
		</section>
	)
}

ListMovie.propTypes = {
	listMovies: PropTypes.array,
	onViewMore: PropTypes.func,
}
