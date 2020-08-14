import request from '@/utils/request'

/**
 * @description 下载文件
 * @param path path
 */
export function download(data) {
  return request({
	url: '/sftp/download',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 预览文件
 * @param path path
 */
export function preview(data) {
  return request({
	url: '/sftp/preview',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 上传文件到临时文件夹
 * @param file file
 * @param isPicture isPicture
 */
export function uploadTempFile(data) {
  return request({
	url: '/sftp/uploadTempFile',
	method: 'post',
	data,
  })
}
