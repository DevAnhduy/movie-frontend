import React from 'react'
import styles from './SearchBar.module.scss'

export const SearchBar = () => {
	return (
		<div className={styles.searchBar}>
			<form>
				<div className={styles.filter}>
					<select>
						<option value="">Select Genres</option>
						<option value="12">Cartoon</option>
						<option value="13">Cartoon/ Animation</option>
						<option value="14">Comedy</option>
						<option value="15">Drama</option>
					</select>
					<select>
						<option value="">Select Actors</option>
						<option value="3">Alexander Cattly</option>
						<option value="5">Greta Garbo</option>
					</select>
					<select>
						<option value="">Select Directors</option>
						<option value="9">Grace Belly</option>
					</select>
					<select>
						<option value="">Select Nation</option>
						<option value="23">Brazil</option>
						<option value="25">France</option>
						<option value="26">Germany</option>
						<option value="27">United States</option>
					</select>
					<select>
						<option value="">Select Year</option>
						<option value="28">2017</option>
						<option value="29">2018</option>
						<option value="30">2019</option>
					</select>
				</div>
				<div className={styles.action}>
					<input
						type="text"
						className={styles.inputSearch}
						placeholder="Movie search..."
					></input>
					<input
						type="submit"
						className={styles.btnSearch}
						alt="Search"
						value="Go"
					></input>
				</div>
			</form>
		</div>
	)
}
