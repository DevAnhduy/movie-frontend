export const API_URL = 'https://movie-app-api-123.herokuapp.com'
export const PATTERN_PHONE = new RegExp(
	/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]{6,9}$/g
)

export const ROUTE = {
	DASHBOARD: '/',
	LOGIN: '/login',
	USER: '/user',
	PROFILE: '/profile',
}

export const METHOD_AXIOS = {
	GET: 'get',
	POST: 'post',
	PUT: 'put',
	DELETE: 'delete',
}

export const MESSAGE = {
	ADD_SUCCESS: 'Create successfully',
	UPDATE_SUCCESS: 'Updated successfully',
	DELETE_SUCCESS: 'Deleted successfully',
	SUCCESS: 'Successfully',

	ERROR: 'Something went wrong. Please try later',

	REQUIRED: 'Please enter data',

	CONFIRM_DELETE: 'Are you sure you want to delete this record?',

	INVALID_EMAIL: 'Email is invalid!',
	INVALID_PHONE: 'Phone is invalid!',
	INVALID_CARD_NUMBER: 'Card number is invalid!',

	LOGIN_FAIL: 'Login fail',
}

export const DEFAULT_AVATAR =
	'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1'

export const FORM_RULE = {
	REQUIRED: { required: true, message: MESSAGE.REQUIRED },
	EMAIL: {
		type: 'email',
		message: MESSAGE.INVALID_EMAIL,
	},
	PHONE: {
		pattern: PATTERN_PHONE,
		message: MESSAGE.INVALID_PHONE,
	},
}
