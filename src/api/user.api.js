import { BaseApi } from './base.api'

export class UserApi extends BaseApi {
	constructor() {
		super('users')
	}

	getMe = async () => {
		const rs = await this.get('/me')
		return rs
	}
}
