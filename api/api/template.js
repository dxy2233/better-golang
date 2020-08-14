import request from '@/utils/request'

/**
 * @description 下载模板：type（1 项目备案；2 资产清单）
 * @param type type
 */
export function downloadTemplate(data) {
  return request({
	url: '/template/downloadTemplate',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 上传模板：type（1 项目备案；2 资产清单）
 * @param file file
 * @param type type
 */
export function uploadFile(data) {
  return request({
	url: '/template/uploadFile',
	method: 'post',
	data,
  })
}
