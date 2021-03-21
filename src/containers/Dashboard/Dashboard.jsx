import React from 'react'
import { Navbar, SearchBar, Footer, VideoCard, SlideCommon } from '../../common'
import styles from './Dashboard.module.scss'
import defaultBG from '../../assets/images/img_50.jpg'
import { ListMovie } from '../ListMovie/ListMovie'

export const Dashboard = () => {
	const settings = {
		slidesToShow: 8,
		slidesToScroll: 8,
		autoplay: true,
		autoplaySpeed: 5000,
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
					slidesToScroll: 2,
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
				<img src={defaultBG} alt="banner" />
			</div>
			<div className={styles.slideVideo}>
				<div className={styles.header}>
					<h2 className={styles.titleHeader}>
						<span>Top </span>
						<span className={styles.titleHighlight}>movies</span>
					</h2>
				</div>
				<SlideCommon settings={settings}>
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
				</SlideCommon>
			</div>
			<SearchBar />
			<ListMovie />
			<Footer />
		</section>
	)
}
