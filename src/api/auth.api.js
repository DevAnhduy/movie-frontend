import { BaseApi } from './base.api'

export class AuthApi extends BaseApi {
	constructor() {
		super('auth')
	}

	register = async data => {
		const rs = await this.post('/register', data)
		return rs
	}

	loginWithGoogle = async data => {
		const rs = await this.post('/google', data)
		return rs
	}

	loginWithFacebook = async data => {
		const rs = await this.post('/facebook', data)
		return rs
	}

	login = async data => {
		const rs = await this.post('/user', data)
		return rs
	}
}
