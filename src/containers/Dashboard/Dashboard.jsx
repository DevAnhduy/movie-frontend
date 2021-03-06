import React, { useEffect, useState } from 'react'
import { Navbar, SearchBar, Footer, VideoCard, SlideCommon } from '../../common'
import styles from './Dashboard.module.scss'
import defaultBG from '../../assets/images/img_50.jpg'
import { ListMovie } from '../ListMovie/ListMovie'
import PropTypes from 'prop-types'
import { HOME_SLIDE_SETTINGS } from '../../utils/constant'
import { onGetTopMovies, onSearchMovies } from '../../redux/movies/movie.action'
import { connect } from 'react-redux'

const DashboardComponent = ({ onGetTopMovies, onSearchMovies, movies }) => {
	const [currentPage, setCurrentPage] = useState(1)
	const [moviesStore, setMoviesStore] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		if (onGetTopMovies) {
			onGetTopMovies()
		}
	}, [onGetTopMovies])

	useEffect(() => {
		if (onSearchMovies && currentPage !== 1) {
			onSearchMovies(currentPage, 10, () => {
				setIsLoading(false)
			})
		}
	}, [currentPage, onSearchMovies])

	useEffect(() => {
		if (onSearchMovies) {
			onSearchMovies(1, 10)
		}
	}, [onSearchMovies])

	useEffect(() => {
		if (movies.all) {
			setMoviesStore([...moviesStore, ...movies.all])
		}
	}, [movies.all])

	const onViewMore = () => {
		setIsLoading(true)
		setCurrentPage(currentPage + 1)
	}

	return (
		<section className={styles.dashboard}>
			<Navbar />
			<div className={styles.banner}>
				<img src={defaultBG} alt="banner" />
			</div>
			<div className={styles.slideVideo}>
				<div className={styles.header}>
					<h2 className={styles.titleHeader}>
						<span>Top </span>
						<span className={styles.titleHighlight}>movies</span>
					</h2>
				</div>
				<SlideCommon settings={HOME_SLIDE_SETTINGS}>
					{movies.top
						? movies.top.map((movie, index) => (
								<VideoCard key={index} data={movie} />
						  ))
						: new Array(10).fill('').map((e, index) => {
								return <VideoCard key={index} data="" />
						  })}
				</SlideCommon>
			</div>
			<SearchBar />
			<ListMovie
				listMovies={moviesStore}
				onViewMore={onViewMore}
				isLoading={isLoading}
			/>
			<Footer />
		</section>
	)
}

DashboardComponent.propTypes = {
	onGetTopMovies: PropTypes.func,
	onSearchMovies: PropTypes.func,
	movies: PropTypes.any,
}

const mapStateToProps = state => ({
	movies: state.movies,
})

export const Dashboard = connect(mapStateToProps, {
	onGetTopMovies,
	onSearchMovies,
})(DashboardComponent)
