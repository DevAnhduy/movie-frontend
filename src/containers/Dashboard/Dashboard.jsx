import React from 'react'
import Logo from '../../assests/images/img_66.png'
import Slider from 'react-slick'
import { Navbar } from '../../common'
import styles from './Dashboard.module.scss'

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
}

export const Dashboard = () => {
	return (
		<>
			<Navbar />
		</>
	)
}
