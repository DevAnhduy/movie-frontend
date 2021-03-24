import React, { useEffect, useState } from 'react'
import styles from './SearchBar.module.scss'
import PropTypes from 'prop-types'
import { MOVIE_TYPE, MOVIE_COUNTRY, MOVIE_YEAR } from '../../utils/constant'
import { onGetAllCategories } from '../../redux/categories/categories.action'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router'

const SearchBarComponent = ({
	categories,
	onGetAllCategories,
	history,
	location,
}) => {
	const [filter, setFilter] = useState({})

	useEffect(() => {
		if (onGetAllCategories) {
			onGetAllCategories((state, result) => {
				console.log(result)
			})
		}
	}, [onGetAllCategories])

	const onChangeFilter = (key, value) => {
		const copyFilter = { ...filter }
		copyFilter[key] = value
		setFilter(copyFilter)
	}

	const handleFilter = () => {
		history.push({
			pathname: '/filter',
			state: {
				filter,
			},
		})
	}

	return (
		<div className={styles.searchBar}>
			<form>
				<div className={styles.filter}>
					<select
						onChange={e =>
							onChangeFilter('category', e.target.value)
						}
					>
						<option value="">Chọn thể loại</option>
						{categories.data
							? categories.data.map((category, index) => (
									<option key={index} value={category.name}>
										{category.name}
									</option>
							  ))
							: ''}
					</select>
					<select>
						<option value="">Chọn độ dài phim</option>
						{MOVIE_TYPE.map((type, index) => (
							<option key={index} value={type.value}>
								{type.displayName}
							</option>
						))}
					</select>
					<select>
						<option value="">Chọn diễn viên</option>
						<option value="9">Grace Belly</option>
					</select>
					<select
						onChange={e =>
							onChangeFilter('country', e.target.value)
						}
					>
						<option value="">Chọn quốc gia</option>
						{MOVIE_COUNTRY.map((country, index) => (
							<option key={index} value={country.value}>
								{country.displayName}
							</option>
						))}
					</select>
					<select
						onChange={e =>
							onChangeFilter('realease_year', e.target.value)
						}
					>
						<option value="">Chọn năm</option>
						{MOVIE_YEAR.map((year, index) => (
							<option key={index} value={year.value}>
								{year.displayName}
							</option>
						))}
					</select>
				</div>
				<div className={styles.action}>
					<input
						type="text"
						className={styles.inputSearch}
						onChange={e => onChangeFilter('name', e.target.value)}
						placeholder="Tìm kiếm theo tên..."
					></input>
					<input
						type="button"
						className={styles.btnSearch}
						alt="Search"
						onClick={handleFilter}
						value="Lọc"
					></input>
				</div>
			</form>
		</div>
	)
}

SearchBarComponent.propTypes = {
	categories: PropTypes.object,
	onGetAllCategories: PropTypes.func,
}

const mapStateToProps = state => ({
	categories: state.categories,
})

export const SearchBar = withRouter(
	connect(mapStateToProps, { onGetAllCategories })(SearchBarComponent)
)
