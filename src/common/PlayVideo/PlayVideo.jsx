import React from 'react'
import styles from './PlayVideo.module.scss'
import ReactPlayer from 'react-player'

export const PlayVideo = () => {
	return (
		<section className={styles.playVideo}>
			<div className={styles.video}>
				<ReactPlayer
					url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
					width={1170}
					height={680}
					controls
					pip
				/>
			</div>
		</section>
	)
}
