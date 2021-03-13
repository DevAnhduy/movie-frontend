import { BaseApi } from './base.api'

export class UserApi extends BaseApi {
	constructor() {
		super('user')
	}

	getMe = async () => {
		const rs = await this.get('/me')
		return rs
	}
}
