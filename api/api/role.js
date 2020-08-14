import request from '@/utils/request'

/**
 * @description 根据ID删除角色
 * @param roleId roleId
 */
export function deleteRole(data) {
  return request({
	url: '/role/deleteRole',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 根据ID获取角色信息
 * @param id id
 */
export function getRoleById(data) {
  return request({
	url: '/role/getRoleById',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 根据登录用户查询所有角色
 */
export function getRoleList(data) {
  return request({
	url: '/role/getRoleList',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 查询所有角色:用户管理
 */
export function getRoles(data) {
  return request({
	url: '/role/getRoles',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 保存角色
 * @param id 角色ID
 * @param code 角色编码
 * @param name 角色名称
 * @param menuIdList 菜单ID集合
 */
export function saveRole(data) {
  return request({
	url: '/role/saveRole',
	method: 'post',
	data,
  })
}
