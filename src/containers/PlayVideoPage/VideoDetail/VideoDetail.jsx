import React, { useEffect, useState } from 'react'
import styles from './VideoDetail.module.scss'
import PropTypes from 'prop-types'
import api from '../../../api/index.api'

export const VideoDetail = ({ detail, onChangeEpisode }) => {
	const [episodes, setEpisodes] = useState()
	const [currentEpisode, setCurrentEpisode] = useState(0)
	const [moviesSameCategory, setMoviesSameCategory] = useState()

	console.log(detail)

	useEffect(() => {
		if (detail) {
			const episodesObj = {}
			detail.episodes.forEach(episode => {
				episode.storage.forEach(item => {
					if (episodesObj.hasOwnProperty(item.server_name)) {
						episodesObj[item.server_name].push({
							episodeIndex: episode.episode,
							url: item.url,
						})
					} else {
						episodesObj[item.server_name] = [
							{
								episodeIndex: episode.episode,
								url: item.url,
							},
						]
					}
				})
			})

			const getMovieSameCategory = async () => {
				const movies = await api.movieApi.searchMovie(
					{
						category: detail.category[0].name,
					},
					1,
					20
				)

				console.log(movies)

				setMoviesSameCategory(movies.data)
			}

			getMovieSameCategory()

			setEpisodes(episodesObj)
		}
	}, [detail])

	const handleChangeEpisode = episode => {
		if (episode) {
			setCurrentEpisode(episode.episodeIndex)
			onChangeEpisode(episode.url)
		}
	}

	return (
		<section className={styles.videoDetailWrapper}>
			<div className={styles.videoDetail}>
				<h1 className={styles.header}>{detail && detail.name}</h1>
				<div className={styles.listServer}>
					{episodes &&
						Object.keys(episodes).map((server, index) => {
							return (
								<div key={index} className={styles.serverItem}>
									<div className={styles.name}>
										<span>{server}</span>
									</div>
									<div className={styles.options}>
										{episodes[server].map(
											(episode, index) => {
												return (
													<span
														key={index}
														className={
															episode.episodeIndex ===
															currentEpisode
																? styles.active
																: ''
														}
														onClick={() =>
															handleChangeEpisode(
																episode
															)
														}
													>
														Part{' '}
														{episode.episodeIndex +
															1}
													</span>
												)
											}
										)}
									</div>
								</div>
							)
						})}
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
						<li>
							<label>Các phim cùng thể loại: </label>
							<ul>
								{moviesSameCategory &&
									moviesSameCategory.map((movie, index) => {
										return <li key={index}>{movie.name}</li>
									})}
							</ul>
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
