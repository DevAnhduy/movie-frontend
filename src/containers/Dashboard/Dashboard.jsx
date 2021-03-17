import React from 'react'
import { Navbar, SlideCommon, VideoCard } from '../../common'
import styles from './Dashboard.module.scss'
import defaultBG from '../../assests/images/img_50.jpg'
import Slider from 'react-slick'

export const Dashboard = () => {
	const settings = {
		slidesToShow: 8,
		slidesToScroll: 8,
		autoplay: true,
		autoplaySpeed: 3000,
		infinite: true,
		arrows: true,
		responsive: [
			{
				breakpoint: 480,
				settings: { slidesToShow: 2, slidesToScroll: 2 },
			},
			{
				breakpoint: 768,
				settings: { slidesToShow: 3, slidesToScroll: 3 },
			},
			{
				breakpoint: 992,
				settings: { slidesToShow: 4, slidesToScroll: 4 },
			},
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 7,
					slidesToScroll: 7,
				},
			},
			{
				breakpoint: 4999,
				settings: { slidesToShow: 8, slidesToScroll: 8 },
			},
		],
		dots: false,
	}
	return (
		<section className={styles.dashboard}>
			<Navbar />
			<div className={styles.banner}>
				<img src={defaultBG} />
			</div>
			<div className={styles.slideVideo}>
				<div className={styles.header}>
					<h2 className={styles.titleHeader}>
						<span>Top </span>
						<span className={styles.titleHightlight}>movies</span>
					</h2>
				</div>
				<Slider {...settings}>
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
				</Slider>
			</div>
		</section>
	)
}
