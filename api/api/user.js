import request from '@/utils/request'

/**
 * @description 删除用户
 * @param id id
 */
export function deleteUser(data) {
  return request({
	url: '/user/deleteUser',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 根据登录用户查询用户列表
 */
export function getUserList(data) {
  return request({
	url: '/user/getUserList',
	method: 'post',
	data,
  })
}

/**
 * @description 重置密码
 * @param id id
 */
export function resetPassword(data) {
  return request({
	url: '/user/resetPassword',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 保存用户
 */
export function saveUser(data) {
  return request({
	url: '/user/saveUser',
	method: 'post',
	data,
  })
}

/**
 * @description 解锁用户
 * @param id id
 */
export function unLockUser(data) {
  return request({
	url: '/user/unLockUser',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 修改密码
 */
export function updatePassword(data) {
  return request({
	url: '/user/updatePassword',
	method: 'post',
	data,
  })
}
