import { combineReducers } from 'redux'
import CategoriesReducer from './categories/categories.reducer'
import MoviesReducer from './movies/movie.reducer'

const rootReducer = combineReducers({
	categories: CategoriesReducer,
	movies: MoviesReducer,
})

export default rootReducer
