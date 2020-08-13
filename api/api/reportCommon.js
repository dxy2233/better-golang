import request from '@/utils/request'

/**
 * @description 删除单个文件
 * @param path path
 */
export function deleteFile(data) {
  return request({
	url: '/reportcommon/deleteFile',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 删除报告
 * @param fileId fileId
 */
export function deleteReport(data) {
  return request({
	url: '/reportcommon/deleteReport',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 通过基线和渗透列表 :type 1 基线 2 渗透 
 * @param processId processId
 * @param type type
 */
export function getBaseOnlineAndPenetration(data) {
  return request({
	url: '/reportcommon/getBaseOnlineAndPenetration',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 根据设备id获取基线获 status :1 初查 ,  2 复查  
 * @param deviceId deviceId
 * @param status status
 */
export function getBaselineByDeviceId(data) {
  return request({
	url: '/reportcommon/getBaselineByDeviceId',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 获取渗透测试 status: 2, 复查 
 * @param processId processId
 * @param status status
 */
export function getPenetrationByProcessId(data) {
  return request({
	url: '/reportcommon/getPenetrationByProcessId',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 项目备案条件和分页查询
 */
export function getReportList(data) {
  return request({
	url: '/reportcommon/getReportList',
	method: 'post',
	data,
  })
}

/**
 * @description 基线初查初始化
 */
export function getReportListData(data) {
  return request({
	url: '/reportcommon/getReportListData',
	method: 'post',
	data,
  })
}

/**
 * @description 渗透整改完成
 * @param penetrationId penetrationId
 */
export function reformPenetration(data) {
  return request({
	url: '/reportcommon/reformPenetration',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 项目基线保存
 */
export function saveBaseline(data) {
  return request({
	url: '/reportcommon/saveBaseline',
	method: 'post',
	data,
  })
}

/**
 * @description 保存渗透
 */
export function savePenetration(data) {
  return request({
	url: '/reportcommon/savePenetration',
	method: 'post',
	data,
  })
}

/**
 * @description 保存复查渗透
 */
export function saveReviewPenetration(data) {
  return request({
	url: '/reportcommon/saveReviewPenetration',
	method: 'post',
	data,
  })
}

/**
 * @description 上传报告图片
 */
export function uploadReport(data) {
  return request({
	url: '/reportcommon/uploadReport',
	method: 'post',
	data,
  })
}
