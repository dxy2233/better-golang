import request from '@/utils/request'

/**
 * @description home
 */
export function (data) {
  return request({
	url: '/',
	method: 'get',
	prams: data,
  })
}
