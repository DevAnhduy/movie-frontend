import { BaseApi } from './base.api'

export class CategoryApi extends BaseApi {
	constructor() {
		super('categories')
	}

	getAllCategories = async () => {
		const rs = await this.get('/')
		return rs
	}

	getOneCategories = async id => {
		const rs = await this.get(`/${id}}`)
		return rs
	}
}
