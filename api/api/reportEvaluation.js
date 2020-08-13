import request from '@/utils/request'

/**
 * @description 校验建设节点：基线检查完成情况、渗透测试完成情况、漏洞扫描完成情况
 * @param processId processId
 */
export function checkConstruction(data) {
  return request({
	url: '/reportevaluation/checkConstruction',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 创建上线前安全风险评估报告
 */
export function createReportEvaluation(data) {
  return request({
	url: '/reportevaluation/createReportEvaluation',
	method: 'post',
	data,
  })
}

/**
 * @description 获取安全评估报告相关的枚举值集合
 */
export function getEnumList(data) {
  return request({
	url: '/reportevaluation/getEnumList',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 上传扫描结果图片
 */
export function uploadImg(data) {
  return request({
	url: '/reportevaluation/uploadImg',
	method: 'post',
	data,
  })
}
