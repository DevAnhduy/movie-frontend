import MoviesTypes from './movies.types'

const INIT_STATE = {
	top: null,
	all: null,
}

const MoviesReducer = (state = INIT_STATE, action) => {
	const { type, payload } = action
	switch (type) {
		case MoviesTypes.GET_TOP_MOVIES:
			return {
				...state,
				top: [...payload],
			}
		case MoviesTypes.SEARCH_MOVIE:
			return {
				...state,
				all: [...payload],
			}
		default:
			return state
	}
}

export default MoviesReducer
