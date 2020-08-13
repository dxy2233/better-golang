import request from '@/utils/request'

/**
 * @description 根据ID删除厂商管理信息
 * @param id id
 */
export function deleteProjectInfoById(data) {
  return request({
	url: '/firmManage/deleteProjectInfoById',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 获取所有厂商信息
 */
export function getFirmManageAll(data) {
  return request({
	url: '/firmManage/getFirmManageAll',
	method: 'post',
	data,
  })
}

/**
 * @description 厂商管理条件和分页查询
 */
export function getFirmManagePage(data) {
  return request({
	url: '/firmManage/getFirmManagePage',
	method: 'post',
	data,
  })
}

/**
 * @description 保存厂商管理信息
 */
export function save(data) {
  return request({
	url: '/firmManage/save',
	method: 'post',
	data,
  })
}
