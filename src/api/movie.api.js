import { BaseApi } from './base.api'

export class MovieApi extends BaseApi {
	constructor() {
		super('movies')
	}

	searchMovie = async (query, page) => {
		let queryString = ''

		if (query) {
			const queryArray = Object.keys(query)

			queryArray.map(item => {
				queryString += `${item}=${query[item]}&`
			})
		}

		const rs = this.get(`/search?page=${page}&${queryString}`)
		return rs
	}

	getTopMovie = async () => {
		const rs = this.get('/top')
		return rs
	}

	getMovieBySlug = async slug => {
		const rs = this.get(`/slug/${slug}`)
		return rs
	}
}
