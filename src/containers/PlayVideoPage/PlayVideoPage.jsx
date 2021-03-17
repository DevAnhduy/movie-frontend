import React from 'react'
import styles from './PlayVideoPage.module.scss'
import { Navbar, PlayVideo, Footer, VideoCard } from '../../common'
import { VideoDetail } from './VideoDetail/VideoDetail'

export const PlayMoviePage = () => {
	return (
		<div className={styles.playMovie}>
			<Navbar />
			<PlayVideo />
			<VideoDetail />
			<Footer />
		</div>
	)
}
