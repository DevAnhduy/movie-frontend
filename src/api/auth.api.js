import { BaseApi } from './base.api'

export class AuthApi extends BaseApi {
	constructor() {
		super('auth')
	}

	loginWithGoogle = async data => {
		const rs = await this.post('/google', data)
		return rs
	}

	loginWithFacebook = async data => {
		const rs = await this.post('/facebook', data)
		return rs
	}
}
