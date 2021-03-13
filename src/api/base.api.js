import { METHOD_AXIOS } from '../utils/constant'
import { API_URL } from '../utils/constant'
const axios = require('axios')

export class BaseApi {
	constructor(pathUrl) {
		this.URL = `${API_URL}/api/v1/${pathUrl}`
	}
	abstract = async (path, data, token, method = METHOD_AXIOS.GET) => {
		if (!token) token = window.localStorage.getItem('token')
		const config = {
			method,
			headers: token
				? {
						Authorization: `Bearer ${token}`,
						'Content-Type': 'application/json;charset=UTF-8',
				  }
				: {
						'Content-Type': 'application/json;charset=UTF-8',
				  },
			url: `${this.URL}${path}`,
			data,
		}
		return axios(config)
			.then(res => res.data)
			.catch(err => {
				// handle error
				console.debug(err)
				throw err
			})
	}

	get = async (path, data, token) =>
		await this.abstract(path, data, token, METHOD_AXIOS.GET)
	post = async (path, data, token) =>
		await this.abstract(path, data, token, METHOD_AXIOS.POST)
	put = async (path, data, token) =>
		await this.abstract(path, data, token, METHOD_AXIOS.PUT)
	delete = async (path, data, token) =>
		await this.abstract(path, data, token, METHOD_AXIOS.DELETE)
}
