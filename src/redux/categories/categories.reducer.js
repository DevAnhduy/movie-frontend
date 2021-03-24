import CategoriesTypes from './categories.types'

const INIT_STATE = {
	data: null,
}

const CategoriesReducer = (state = INIT_STATE, action) => {
	const { type, payload } = action
	switch (type) {
		case CategoriesTypes.GET_ALL_CATEGORIES:
			return {
				...state,
				data: [...payload],
			}
		default:
			return state
	}
}

export default CategoriesReducer
