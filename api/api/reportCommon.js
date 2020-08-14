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
 * @param processNode 当前节点:0 全部 1 立项 2 设计 3 建设 4 初验 5 终验 6 运维 7 暂停 8 完成
 * @param startPage 页面编号
 * @param pageSize 页面大小
 * @param projectCode 项目编号
 * @param projectName 项目名称
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
 * @param dictionIds 资产ids
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
 * @param osCode 操作系统
 * @param middlewareCode 中间件
 * @param dataBaseCode 数据库
 * @param childData 基线数据 Linux
 * @param status 状态 ：初查 1 ， 复查 2
 * @param reportUserBaseBO 用户单位信息
 * @param deviceId 设备id
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
 * @param processId 流程id
 * @param reportUserBaseBO 用户信息
 * @param reportPenetrationBO 渗透报告基本信息
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
 * @param processId 流程ID
 * @param reportUserBaseBO 用户单位基本信息
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
 * @param file file
 * @param mode mode
 * @param processId processId
 * @param status status
 * @param type type
 */
export function uploadReport(data) {
  return request({
	url: '/reportcommon/uploadReport',
	method: 'post',
	data,
  })
}
