import React from 'react'
//import styles from './SlideCommon.module.scss'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

export const SlideCommon = ({
	settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	},
	children,
}) => {
	return <Slider {...settings}>{children}</Slider>
}

SlideCommon.propTypes = {
	settings: PropTypes.object,
	children: PropTypes.array,
}
