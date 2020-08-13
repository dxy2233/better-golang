import request from '@/utils/request'

/**
 * @description 归档进度
 * @param id id
 * @param projectSchedule projectSchedule
 */
export function archiveSchedule(data) {
  return request({
	url: '/process/archiveSchedule',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 根据ID删除会议纪要
 * @param id id
 */
export function deleteConference(data) {
  return request({
	url: '/process/deleteConference',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 下载第三方使用管理情况统计表
 * @param processId processId
 */
export function downloadTableByProcessId(data) {
  return request({
	url: '/process/downloadTableByProcessId',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 获取城市信息
 */
export function getCity(data) {
  return request({
	url: '/process/getCity',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 根据ID获取会议纪要详细信息
 * @param id id
 */
export function getConferenceById(data) {
  return request({
	url: '/process/getConferenceById',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 根据ID获取整个流程信息
 * @param id id
 */
export function getProcessById(data) {
  return request({
	url: '/process/getProcessById',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 根据登录用户，流程条件和分页查询
 */
export function getProcessList(data) {
  return request({
	url: '/process/getProcessList',
	method: 'post',
	data,
  })
}

/**
 * @description 第三方项目管理
 */
export function getProjectList(data) {
  return request({
	url: '/process/getProjectList',
	method: 'post',
	data,
  })
}

/**
 * @description 获取第三方使用管理情况统计表
 * @param processId processId
 */
export function getStatisticsTableByProcessId(data) {
  return request({
	url: '/process/getStatisticsTableByProcessId',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 暂停项目：id 流程ID；pause 为true是暂停，为false是恢复；reason 暂停或恢复的原因
 * @param id id
 * @param pause pause
 * @param reason reason
 */
export function pauseProcess(data) {
  return request({
	url: '/process/pauseProcess',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 保存验收
 */
export function saveAccept(data) {
  return request({
	url: '/process/saveAccept',
	method: 'post',
	data,
  })
}

/**
 * @description 保存会议纪要
 */
export function saveConference(data) {
  return request({
	url: '/process/saveConference',
	method: 'post',
	data,
  })
}

/**
 * @description 保存建设
 */
export function saveConstruction(data) {
  return request({
	url: '/process/saveConstruction',
	method: 'post',
	data,
  })
}

/**
 * @description 保存设计
 */
export function saveDesign(data) {
  return request({
	url: '/process/saveDesign',
	method: 'post',
	data,
  })
}

/**
 * @description 保存立项
 */
export function saveInitiate(data) {
  return request({
	url: '/process/saveInitiate',
	method: 'post',
	data,
  })
}

/**
 * @description 保存运维
 */
export function saveMaintain(data) {
  return request({
	url: '/process/saveMaintain',
	method: 'post',
	data,
  })
}
