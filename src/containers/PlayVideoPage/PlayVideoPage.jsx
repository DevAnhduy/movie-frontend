import React, { useEffect, useState } from 'react'
import styles from './PlayVideoPage.module.scss'
import { Navbar, PlayVideo, Footer } from '../../common'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import { VideoDetail } from './VideoDetail/VideoDetail'
import api from '../../api/index.api'

const PlayMoviePageComponent = ({ match, history }) => {
	const [currentMovie, setCurrentMovie] = useState()
	const [currentEpisode, setCurrentEpisode] = useState()

	useEffect(() => {
		const { slug } = match.params
		if (slug) {
			const getMovieBySlug = async () => {
				const movie = await api.movieApi.getMovieBySlug(slug)
				setCurrentMovie(movie.data)
				setCurrentEpisode(movie.data.episodes[0].storage[0].url)
			}

			getMovieBySlug()
		} else {
			history.push('/')
		}
	}, [history, match])

	const onChangeEpisode = url => {
		setCurrentEpisode(url)
	}

	return (
		<div className={styles.playMovie}>
			<Navbar />
			<PlayVideo episode={currentEpisode} />
			<VideoDetail
				detail={currentMovie && currentMovie}
				onChangeEpisode={onChangeEpisode}
			/>
			<Footer />
		</div>
	)
}

PlayMoviePageComponent.propTypes = {
	match: PropTypes.any,
	history: PropTypes.any,
}

export const PlayMoviePage = withRouter(PlayMoviePageComponent)
