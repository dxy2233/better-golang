import request from '@/utils/request'

/**
 * @description 删除漏洞
 * @param fileId fileId
 */
export function deleteFlaw(data) {
  return request({
	url: '/flawcommon/deleteFlaw',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 获取项目漏洞详情
 */
export function getFlawDetailInfoPage(data) {
  return request({
	url: '/flawcommon/getFlawDetailInfoPage',
	method: 'post',
	data,
  })
}

/**
 * @description 获取漏洞详情列表
 * @param fileId fileId
 * @param pageSize pageSize
 * @param startPage startPage
 */
export function getFlawListByFileId(data) {
  return request({
	url: '/flawcommon/getFlawListByFileId',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 根据流程节点获取漏洞详情列表
 */
export function getFlawListByProcessId(data) {
  return request({
	url: '/flawcommon/getFlawListByProcessId',
	method: 'post',
	data,
  })
}

/**
 * @description 获取漏洞扫描报告
 * @param processId processId
 */
export function getFlawReportList(data) {
  return request({
	url: '/flawcommon/getFlawReportList',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 漏洞通过：processId 流程ID
 * @param processId processId
 */
export function passFlawByProcessId(data) {
  return request({
	url: '/flawcommon/passFlawByProcessId',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 预览漏洞扫描报告
 * @param fileId fileId
 */
export function previewFlaw(data) {
  return request({
	url: '/flawcommon/previewFlaw',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 申请复评
 * @param fileId fileId
 */
export function reviewByFileId(data) {
  return request({
	url: '/flawcommon/reviewByFileId',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 上传漏洞扫描报告
 */
export function uploadFlawReport(data) {
  return request({
	url: '/flawcommon/uploadFlawReport',
	method: 'post',
	data,
  })
}
