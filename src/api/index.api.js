import { AuthApi } from './auth.api'
import { UserApi } from './user.api'

class API {
	static authApi = new AuthApi()
	static userApi = new UserApi()
}

export default API
