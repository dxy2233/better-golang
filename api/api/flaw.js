import request from '@/utils/request'

/**
 * @description 根据漏洞信息id删除相关信息
 * @param id id
 */
export function deleteFlawById(data) {
  return request({
	url: '/flaw/deleteFlawById',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 导出漏洞信息的Word文档
 */
export function downloadWord(data) {
  return request({
	url: '/flaw/downloadWord',
	method: 'post',
	data,
  })
}

/**
 * @description 漏洞附件上传
 */
export function flawAttachUpload(data) {
  return request({
	url: '/flaw/flawAttachUpload',
	method: 'post',
	data,
  })
}

/**
 * @description 根据ID获取漏洞信息
 * @param id id
 */
export function getFlawById(data) {
  return request({
	url: '/flaw/getFlawById',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 漏洞信息条件和分页查询
 */
export function getFlawPage(data) {
  return request({
	url: '/flaw/getFlawPage',
	method: 'post',
	data,
  })
}

/**
 * @description 漏洞导入
 */
export function importFlaw(data) {
  return request({
	url: '/flaw/importFlaw',
	method: 'post',
	data,
  })
}

/**
 * @description 整改漏洞
 * @param id id
 */
export function repairFlaw(data) {
  return request({
	url: '/flaw/repairFlaw',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 保存漏洞信息
 */
export function saveFlaw(data) {
  return request({
	url: '/flaw/saveFlaw',
	method: 'post',
	data,
  })
}
