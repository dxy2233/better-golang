import request from '@/utils/request'

/**
 * @description 根据ID删除服务商
 * @param id id
 */
export function deleteFacilitatorById(data) {
  return request({
	url: '/facilitator/deleteFacilitatorById',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 根据服务商员工id删除
 * @param id id
 */
export function deleteFacilitatorPersonById(data) {
  return request({
	url: '/facilitator/deleteFacilitatorPersonById',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 服务商信息和员工信息：用户管理
 */
export function getFacilitatorAndPerson(data) {
  return request({
	url: '/facilitator/getFacilitatorAndPerson',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 服务商名称列表
 */
export function getFacilitatorNameList(data) {
  return request({
	url: '/facilitator/getFacilitatorNameList',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 服务商信息条件和分页查询
 */
export function getInfoPage(data) {
  return request({
	url: '/facilitator/getInfoPage',
	method: 'post',
	data,
  })
}

/**
 * @description 服务商人员列表
 * @param facilitatorId facilitatorId
 * @param pageSize pageSize
 * @param startPage startPage
 */
export function getPersonByFacilitatorId(data) {
  return request({
	url: '/facilitator/getPersonByFacilitatorId',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 服务商资质上传
 */
export function qualificationUpload(data) {
  return request({
	url: '/facilitator/qualificationUpload',
	method: 'post',
	data,
  })
}

/**
 * @description 服务商信息保存
 */
export function saveFacilitator(data) {
  return request({
	url: '/facilitator/saveFacilitator',
	method: 'post',
	data,
  })
}

/**
 * @description 服务商人员信息保存
 */
export function saveFacilitatorPerson(data) {
  return request({
	url: '/facilitator/saveFacilitatorPerson',
	method: 'post',
	data,
  })
}
