import React, { useEffect, useState } from 'react'
import styles from './PlayVideoPage.module.scss'
import { Navbar, PlayVideo, Footer } from '../../common'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import { VideoDetail } from './VideoDetail/VideoDetail'
import api from '../../api/index.api'

const PlayMoviePageComponent = ({ match, history }) => {
	const [currentMovie, setCurrentMovie] = useState()

	useEffect(() => {
		const { slug } = match.params
		if (slug) {
			const getMovieBySlug = async () => {
				const movie = await api.movieApi.getMovieBySlug(slug)
				setCurrentMovie(movie.data)
			}

			getMovieBySlug()
		} else {
			history.push('/')
		}
	}, [history, match])

	return (
		<div className={styles.playMovie}>
			<Navbar />
			<PlayVideo
				episode={currentMovie && currentMovie.episodes[0].storage}
			/>
			<VideoDetail detail={currentMovie && currentMovie} />
			<Footer />
		</div>
	)
}

PlayMoviePageComponent.propTypes = {
	match: PropTypes.any,
	history: PropTypes.any,
}

export const PlayMoviePage = withRouter(PlayMoviePageComponent)
