import React, { useEffect, useState } from 'react'
import { Footer, Navbar, RecommendedCard, VideoCard } from '../../common'
import styles from './Filter.module.scss'
import defaultBG from '../../assets/images/img_50.jpg'
import { Pagination } from 'antd'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import api from '../../api/index.api'

const FilterComponent = ({ location }) => {
	const [movies, setMovies] = useState()

	useEffect(() => {
		if (location) {
			const { filter } = location.state
			const getMovieFilter = async () => {
				const movies = await api.movieApi.searchMovie(filter, 1)
				setMovies(movies.data)
			}
			getMovieFilter()
		}
	}, [location])

	return (
		<section className={styles.filter}>
			<Navbar />
			<div className={styles.banner}>
				<img src={defaultBG} alt="banner" />
			</div>
			<div className={styles.content}>
				<div className={styles.listMovie}>
					{movies
						? movies.map((movie, index) => (
								<VideoCard
									key={index}
									size="large"
									data={movie}
								/>
						  ))
						: new Array(6).fill('').map((e, index) => {
								return (
									<VideoCard
										key={index}
										size="large"
										data={''}
									/>
								)
						  })}
					<Pagination total={50} current={1} />
				</div>
				<div className={styles.recommended}>
					<RecommendedCard />
					<RecommendedCard />
					<RecommendedCard />
					<RecommendedCard />
					<RecommendedCard />
					<RecommendedCard />
				</div>
			</div>
			<Footer />
		</section>
	)
}

FilterComponent.propTypes = {
	location: PropTypes.any,
}

export const Filter = withRouter(FilterComponent)
