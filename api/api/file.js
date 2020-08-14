import request from '@/utils/request'

/**
 * @description 评审：确认通过，fileId是被评审文件的ID
 * @param fileId fileId
 */
export function confirm(data) {
  return request({
	url: '/file/confirm',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 流程管控：删除文件
 * @param fileId fileId
 */
export function deleteFile(data) {
  return request({
	url: '/file/deleteFile',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 根据相关文件的ID，获取该文件的评审列表
 * @param fileId fileId
 */
export function getExamineList(data) {
  return request({
	url: '/file/getExamineList',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 流程管控 预览文件：isExamineFile 是否是评审文件
 * @param fileId fileId
 * @param isExamineFile isExamineFile
 */
export function previewFile(data) {
  return request({
	url: '/file/previewFile',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 提交建议
 * @param examineSummary 审核建议
 * @param examinePerson 评审人
 * @param createTime 评审时间
 * @param id id
 * @param fileId 被评审文件的ID
 * @param examineFileName 评审文件名称
 * @param examineFilePath 评审文件上传路径
 * @param examineFileSize 评审文件大小
 */
export function saveSuggestion(data) {
  return request({
	url: '/file/saveSuggestion',
	method: 'post',
	data,
  })
}

/**
 * @description 流程管控：上传文件，fileId是文件ID，processId是流程ID，schedule，type是类型，isExamineFile 是否是评审文件
 * @param file file
 * @param fileId fileId
 * @param isExamineFile isExamineFile
 * @param processId processId
 * @param schedule schedule
 * @param type type
 */
export function uploadFile(data) {
  return request({
	url: '/file/uploadFile',
	method: 'post',
	data,
  })
}
