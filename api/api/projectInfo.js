import request from '@/utils/request'

/**
 * @description 项目备案审核
 */
export function checkExamineStatus(data) {
  return request({
	url: '/projectInfo/checkExamineStatus',
	method: 'post',
	data,
  })
}

/**
 * @description 根据ID删除项目备案信息
 * @param id id
 */
export function deleteProjectInfoById(data) {
  return request({
	url: '/projectInfo/deleteProjectInfoById',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 项目备案条件和分页查询
 */
export function getInfoPage(data) {
  return request({
	url: '/projectInfo/getInfoPage',
	method: 'post',
	data,
  })
}

/**
 * @description 获取正在进行中的项目
 */
export function getMaintainStatusProject(data) {
  return request({
	url: '/projectInfo/getMaintainStatusProject',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 获取运营商基本信息
 */
export function getOperator(data) {
  return request({
	url: '/projectInfo/getOperator',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 导入项目备案信息
 */
export function importProject(data) {
  return request({
	url: '/projectInfo/importProject',
	method: 'post',
	data,
  })
}

/**
 * @description 保存项目备案信息
 */
export function saveProjectInfo(data) {
  return request({
	url: '/projectInfo/saveProjectInfo',
	method: 'post',
	data,
  })
}
