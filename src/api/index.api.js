import { AuthApi } from './auth.api'
import { UserApi } from './user.api'
import { CategoryApi } from './category.api'
import { MovieApi } from './movie.api'
class API {
	static authApi = new AuthApi()
	static userApi = new UserApi()
	static categoryApi = new CategoryApi()
	static movieApi = new MovieApi()
}

export default API
