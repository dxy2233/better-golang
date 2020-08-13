import request from '@/utils/request'

/**
 * @description 根据id删除审计人员
 * @param id id
 */
export function deleteById(data) {
  return request({
	url: '/expert/deleteById',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 审计人员信息条件和分页查询
 */
export function getExpertPage(data) {
  return request({
	url: '/expert/getExpertPage',
	method: 'post',
	data,
  })
}

/**
 * @description 审计人员信息保存
 */
export function save(data) {
  return request({
	url: '/expert/save',
	method: 'post',
	data,
  })
}
