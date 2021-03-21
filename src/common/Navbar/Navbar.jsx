import React from 'react'
import styles from './Navbar.module.scss'
import Logo from '../../assets/images/logo.svg'
import { ROUTE } from '../../utils/constant'

export const Navbar = () => {
	return (
		<header className={styles.navbar}>
			<div className={styles.container}>
				<div className={styles.left}>
					<div className={styles.logo}>
						<a href={ROUTE.DASHBOARD}>
							<img src={Logo} alt="logo" />
							<p className={styles.logoName}>Movie247</p>
						</a>
					</div>
					<div className={styles.searchBar}>
						<input type="text" placeholder="Movie search...." />
					</div>
					<div className={styles.btnSearch}>
						<button>Go</button>
					</div>
				</div>
				<div className={styles.right}>
					<ul>
						<li>HOME</li>
						<li>TV SHOW</li>
						<li>WATCH ONLINE</li>
						<li>MOVIE</li>
					</ul>
				</div>
			</div>
		</header>
	)
}
