import request from '@/utils/request'

/**
 * @description 根据ID删除部门人员
 * @param personId personId
 */
export function deleteOrgNodePersonById(data) {
  return request({
	url: '/systemorgnode/deleteOrgNodePersonById',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 根据ID删除部门
 * @param id id
 */
export function deleteSystemOrgNodeById(data) {
  return request({
	url: '/systemorgnode/deleteSystemOrgNodeById',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 多部门人员信息查询
 */
export function getOrgPersonByIds(data) {
  return request({
	url: '/systemorgnode/getOrgPersonByIds',
	method: 'post',
	data,
  })
}

/**
 * @description 部门人员信息条件和分页查询
 */
export function getOrgPersonPage(data) {
  return request({
	url: '/systemorgnode/getOrgPersonPage',
	method: 'post',
	data,
  })
}

/**
 * @description 流程管控获取部门树
 * @param processId processId
 */
export function getProcessOrgNodeTree(data) {
  return request({
	url: '/systemorgnode/getProcessOrgNodeTree',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 搜索框单位下拉列表单位树
 */
export function getSearchNodeTree(data) {
  return request({
	url: '/systemorgnode/getSearchNodeTree',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 根据部门ID获取部门信息
 * @param id id
 */
export function getSystemOrgById(data) {
  return request({
	url: '/systemorgnode/getSystemOrgById',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 根据登录用户查询部门列表
 */
export function getSystemOrgNodeTree(data) {
  return request({
	url: '/systemorgnode/getSystemOrgNodeTree',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 根据运营商获取部门信息
 * @param orgId orgId
 */
export function getSystemOrgNodeTreeById(data) {
  return request({
	url: '/systemorgnode/getSystemOrgNodeTreeById',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 保存部门
 */
export function saveSystemOrgNode(data) {
  return request({
	url: '/systemorgnode/saveSystemOrgNode',
	method: 'post',
	data,
  })
}

/**
 * @description 保存部门人员
 */
export function saveSystemOrgNodePerson(data) {
  return request({
	url: '/systemorgnode/saveSystemOrgNodePerson',
	method: 'post',
	data,
  })
}
