import React from 'react'
import styles from './Navbar.module.scss'
import { Logo } from '..'
import { Link } from 'react-router-dom'
export const Navbar = () => {
	return (
		<header className={styles.navbar}>
			<div className={styles.container}>
				<div className={styles.left}>
					<Logo />
					<div className={styles.searchBar}>
						<input type="text" placeholder="Tìm kiếm phim ..." />
					</div>
					<div className={styles.btnSearch}>
						<button>Go</button>
					</div>
				</div>
				<div className={styles.right}>
					<ul>
						<Link to="/">
							<li>Trang chủ</li>
						</Link>
						<li>Liên hệ</li>
						<li>Đăng ký</li>
						<Link to="/login">
							<li>Đăng nhập</li>
						</Link>
					</ul>
				</div>
			</div>
		</header>
	)
}
