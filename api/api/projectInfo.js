import request from '@/utils/request'

/**
 * @description 项目备案审核
 * @param id 项目id
 * @param examineStatus examineStatus 1:通过 ，2:未通过
 * @param examineSuggest 审核建议
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
 * @param startPage 页面编号
 * @param pageSize 页面大小
 * @param projectCode 项目编号
 * @param projectName 项目名称
 * @param orgId 单位id
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
 * @param myfile myfile
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
 * @param ipAddressValid 是否使用公网IP:0 否，1：是
 * @param id 主键ID
 * @param facilitatorId 所选服务商的id
 * @param recordValid 是否定级备案:0 否，1：是
 * @param recordLevel 定级备案级别：1，2,3,4，5
 * @param fundsSource 资金来源
 * @param ipAddressNum 使用公网IP个数
 * @param orgId 运营商id
 * @param projectCode 项目编号
 * @param projectName 项目名称
 * @param projectBudget 项目预算
 * @param dutyDepartment 责任部门
 */
export function saveProjectInfo(data) {
  return request({
	url: '/projectInfo/saveProjectInfo',
	method: 'post',
	data,
  })
}
