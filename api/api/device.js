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
 */
export function saveDevice(data) {
  return request({
	url: '/device/saveDevice',
	method: 'post',
	data,
  })
}
