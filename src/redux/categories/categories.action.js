import CategoriesTypes from './categories.types'
import api from '../../api/index.api'

export const onGetAllCategories = cb => {
	return async dispatch => {
		try {
			const rs = await api.categoryApi.getAllCategories()
			dispatch({
				type: CategoriesTypes.GET_ALL_CATEGORIES,
				payload: rs.data,
			})

			cb && cb(true, rs.data)
		} catch (err) {
			cb && cb(false, err.message)
		}
	}
}
