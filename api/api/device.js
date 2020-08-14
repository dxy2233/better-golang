import request from '@/utils/request'

/**
 * @description 建设节点：删除设备
 * @param id id
 */
export function deleteDeviceById(data) {
  return request({
	url: '/device/deleteDeviceById',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 建设节点：导出设备
 * @param processId processId
 */
export function downloadDevice(data) {
  return request({
	url: '/device/downloadDevice',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 通过设备deviceId获取当前资产
 * @param deviceId deviceId
 */
export function getAsstesByDeviceId(data) {
  return request({
	url: '/device/getAsstesByDeviceId',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 根据ID获取设备资产信息列表type:1 基线 2 渗透 0 全部
 * @param processId processId
 * @param type type
 */
export function getDeviceAssetsById(data) {
  return request({
	url: '/device/getDeviceAssetsById',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 建设节点：查询设备列表
 * @param processId processId
 */
export function getDeviceList(data) {
  return request({
	url: '/device/getDeviceList',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 建设节点：导入设备
 * @param file file
 * @param importName importName
 * @param processId processId
 */
export function importDevice(data) {
  return request({
	url: '/device/importDevice',
	method: 'post',
	data,
  })
}

/**
 * @description 建设节点：保存设备
 * @param deviceType 设备厂家/型号
 * @param cabinetNumber 机柜编号
 * @param serialNumber 序号
 * @param deviceName 设备名称
 * @param deviceSort 设备类型
 * @param dbVersion 数据库版本
 * @param url 应用WEB URL地址
 * @param port 端口
 * @param deleteVisible 删除按钮是否可见
 * @param id ID
 * @param systemVersion 操作系统版本
 * @param midVersion 中间件版本
 * @param dcnAddress DCN网地址
 * @param editVisible 编辑按钮是否可见
 * @param processId 流程ID
 * @param position 机房位置
 * @param privateAddress 私网IP地址
 * @param importName 导入人姓名
 * @param publicAddress 公网IP地址
 * @param remark 备注
 */
export function saveDevice(data) {
  return request({
	url: '/device/saveDevice',
	method: 'post',
	data,
  })
}
