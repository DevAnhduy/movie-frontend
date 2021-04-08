export const API_URL = 'http://18.141.56.9:3000'
export const PATTERN_PHONE = new RegExp(
	/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]{6,9}$/g
)

export const ROUTE = {
	DASHBOARD: '/',
	LOGIN: '/login',
	USER: '/user',
	PROFILE: '/profile',
	VIDEO: '/video',
	FILTER: '/filter',
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

export const HOME_SLIDE_SETTINGS = {
	slidesToShow: 8,
	slidesToScroll: 8,
	autoplay: true,
	autoplaySpeed: 5000,
	infinite: true,
	arrows: true,
	responsive: [
		{
			breakpoint: 480,
			settings: { slidesToShow: 2, slidesToScroll: 2 },
		},
		{
			breakpoint: 768,
			settings: { slidesToShow: 3, slidesToScroll: 3 },
		},
		{
			breakpoint: 992,
			settings: { slidesToShow: 4, slidesToScroll: 4 },
		},
		{
			breakpoint: 1440,
			settings: {
				slidesToShow: 7,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 4999,
			settings: { slidesToShow: 8, slidesToScroll: 8 },
		},
	],
	dots: false,
}

export const MOVIE_YEAR = [
	{
		displayName: '2020',
		value: '2020',
	},
	{
		displayName: '2019',
		value: '2019',
	},
	{
		displayName: '2018',
		value: '2018',
	},
	{
		displayName: '2017',
		value: '2019',
	},
	{
		displayName: '2016',
		value: 2016,
	},
]

export const MOVIE_TYPE = [
	{
		displayName: 'Phim lẻ',
		value: 'Phim lẻ',
	},
	{
		displayName: 'Phim bộ',
		value: 'Phim bộ',
	},
]

export const MOVIE_COUNTRY = [
	{
		displayName: 'Việt Nam',
		value: 'Việt Nam',
	},
	{
		displayName: 'Brazil',
		value: 'Brazil',
	},
	{
		displayName: 'United States',
		value: 'United States',
	},
	{
		displayName: 'Thái Lan',
		value: 'Thái Lan',
	},
	{
		displayName: 'Nhật Bản',
		value: 'Nhật Bản',
	},
]
