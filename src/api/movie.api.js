import { BaseApi } from './base.api'

export class MovieApi extends BaseApi {
	constructor() {
		super('movies')
	}

	searchMovie = async (query, page, limit) => {
		let queryString = ''

		if (query) {
			const queryArray = Object.keys(query)

			queryArray.forEach(item => {
				queryString += `${item}=${query[item].toString()}&`
			})
		}

		const rs = this.get(
			`/search?page=${page}&limit=${limit}&${queryString}`
		)
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
