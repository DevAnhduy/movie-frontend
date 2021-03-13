import { message } from 'antd'
import { MESSAGE } from '../utils/constant'

export const serializeForm = data => {
	let rs = ''
	for (const k in data) {
		rs += `${k}=${encodeURIComponent(data[k])}&`
	}
	return rs.substr(0, rs.length - 1) // remove '&' at the end
}

export const showMessageError = msg => {
	message.error(msg || MESSAGE.ERROR)
}

export const showMessageWarning = msg => {
	message.warning(msg || MESSAGE.ERROR)
}

export const showMessageSuccess = msg => {
	message.success(msg || MESSAGE.SUCCESS)
}

export const showMessageInfo = msg => {
	message.info(msg || MESSAGE.SUCCESS)
}

export const formatNumber = num => {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
