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
 * @param startPage 页面编号
 * @param pageSize 页面大小
 * @param name 名称
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
 * @param id id
 * @param name 厂商名称
 * @param firmCode 编码
 * @param editVisble 是否显示编辑按钮
 * @param deleteVisble 是否显示删除按钮
 */
export function save(data) {
  return request({
	url: '/firmManage/save',
	method: 'post',
	data,
  })
}
