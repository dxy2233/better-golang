import request from '@/utils/request'

/**
 * @description 查询所有字典值
 */
export function getDictionaryValue(data) {
  return request({
	url: '/dictionary/getDictionaryValue',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 根据key查询字典值
 * @param key key
 */
export function getDictionaryValueByKey(data) {
  return request({
	url: '/dictionary/getDictionaryValueByKey',
	method: 'get',
	prams: data,
  })
}
