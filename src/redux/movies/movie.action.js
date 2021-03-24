import MoviesTypes from './movies.types'
import api from '../../api/index.api'

export const onSearchMovies = (page = 1, cb) => {
	return async dispatch => {
		try {
			const rs = await api.movieApi.searchMovie({}, page)
			dispatch({
				type: MoviesTypes.SEARCH_MOVIE,
				payload: rs.data,
			})

			cb && cb(true, rs.data)
		} catch (err) {
			cb && cb(false, err.message)
		}
	}
}

export const onGetTopMovies = cb => {
	return async dispatch => {
		try {
			const rs = await api.movieApi.getTopMovie()
			dispatch({
				type: MoviesTypes.GET_TOP_MOVIES,
				payload: rs.data,
			})
		} catch (err) {
			cb && cb(false, err.message)
		}
	}
}
