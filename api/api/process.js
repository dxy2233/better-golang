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
 * @param startPage 页面编号
 * @param pageSize 页面大小
 * @param projectCode 项目编号
 * @param projectName 项目名称
 * @param facilitator 服务商
 * @param orgId 所属部门
 * @param type 必传参数，类型：0 所有；1 立项；2 设计；3 建设；4 验收；5 运维；6 暂停；7 完成
 * @param from 来源：0 所有；1 项目资产管控
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
 * @param startPage 页面编号
 * @param pageSize 页面大小
 * @param projectName 项目名称
 * @param platformName 系统/平台名称
 * @param cityId 影响范围
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
 * @param fileBOList 相关资料
 * @param finalFileBOList 终验相关资料
 * @param archiveVisible 归档按钮是否可见
 * @param contractOrg 承建单位信息
 * @param saveVisible 保存按钮是否可见
 * @param processId 流程ID
 * @param summary 验收结论
 * @param buildOrg 建设单位信息
 * @param editVisible 编辑按钮是否可见
 * @param conferenceVisible 新增会议纪要按钮是否可见
 * @param status 状态：未开始；进行中；完成；项目暂停
 * @param schedule 项目进度名称
 * @param firstFileBOList 初验相关资料
 * @param conferenceBOList 会议纪要
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
 * @param id ID
 * @param conferenceName 会议名称
 * @param perString 参会人员
 * @param fileId 会议文件ID（如实返回即可）
 * @param fileSize 会议文件大小
 * @param processId 流程ID
 * @param schedule 项目进度
 * @param hostName 主持人员
 * @param conferenceTime 会议时间
 * @param orgId 参会部门
 * @param fileName 会议文件名称
 * @param filePath 会议文件上传路径
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
 * @param processId 流程ID
 * @param buildOrg 建设单位信息
 * @param contractOrg 承建单位信息
 * @param conferenceBOList 会议纪要
 * @param saveVisible 保存按钮是否可见
 * @param evaluatVisible 安全评估报告是否可见
 * @param conferenceVisible 新增会议纪要按钮是否可见
 * @param schedule 项目进度名称
 * @param fileBOList 相关资料
 * @param editVisible 编辑按钮是否可见
 * @param archiveVisible 归档按钮是否可见
 * @param firmId 项目厂商
 * @param status 状态：未开始；进行中；完成；项目暂停
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
 * @param principal 责任人
 * @param conferenceVisible 新增会议纪要按钮是否可见
 * @param status 状态：未开始；进行中；完成；项目暂停
 * @param email 邮箱
 * @param visa 变更签证
 * @param processId 流程ID
 * @param org 设计单位
 * @param address 通信地址
 * @param conferenceBOList 会议纪要
 * @param saveVisible 保存按钮是否可见
 * @param editVisible 编辑按钮是否可见
 * @param archiveVisible 归档按钮是否可见
 * @param schedule 项目进度名称
 * @param fileBOList 相关资料
 * @param tel 联系方式
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
 * @param resOrg 责任单位信息
 * @param conferenceBOList 会议纪要
 * @param archiveVisible 归档按钮是否可见
 * @param conferenceVisible 新增会议纪要按钮是否可见
 * @param schedule 项目进度名称
 * @param org 需求单位
 * @param type 支出方式：1 成本；2 资本
 * @param editVisible 编辑按钮是否可见
 * @param status 状态：未开始；进行中；完成；项目暂停
 * @param processId 流程ID
 * @param fileBOList 相关资料
 * @param saveVisible 保存按钮是否可见
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
 * @param conferenceBOList 会议纪要
 * @param fileBOList 相关资料
 * @param maintainTrader 第三方维护商信息
 * @param maintainOrg 维护单位信息
 * @param editVisible 编辑按钮是否可见
 * @param conferenceVisible 新增会议纪要按钮是否可见
 * @param table 第三方使用管理情况统计表
 * @param saveVisible 保存按钮是否可见
 * @param description 运维说明
 * @param ipList IP地址
 * @param isSaveTable 是否保存第三方使用管理情况统计表
 * @param archiveVisible 归档按钮是否可见
 * @param status 状态：未开始；进行中；完成；项目暂停
 * @param processId 流程ID
 * @param schedule 项目进度名称
 */
export function saveMaintain(data) {
  return request({
	url: '/process/saveMaintain',
	method: 'post',
	data,
  })
}
