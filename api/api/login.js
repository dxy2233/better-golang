import request from '@/utils/request'

/**
 * @description 获取登录用户信息
 */
export function getUser(data) {
  return request({
	url: '/loginCtrl/getUser',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 生成验证码
 */
export function getVerify(data) {
  return request({
	url: '/loginCtrl/getVerify',
	method: 'get',
	prams: data,
  })
}
