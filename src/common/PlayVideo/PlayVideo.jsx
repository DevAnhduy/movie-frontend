import React from 'react'
import styles from './PlayVideo.module.scss'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'

export const PlayVideo = ({ episode }) => {
	return (
		<section className={styles.playVideo}>
			<div className={styles.video}>
				<ReactPlayer
					url={episode}
					width={1170}
					height={680}
					controls
					pip
				/>
			</div>
		</section>
	)
}

PlayVideo.propTypes = {
	url: PropTypes.any,
}
