import request from '@/utils/request'

/**
 * @description 导出列表统计
 */
export function downloadList(data) {
  return request({
	url: '/statistics/downloadList',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 获取列表统计
 */
export function getList(data) {
  return request({
	url: '/statistics/getList',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 根据类型和年份获取统计数据：type（1 项目备案各部门负责统计；2 项目审计统计；3 流程管控统计；4 供应商资质统计5 项目备案等级统计 6 项目备案预算区间统计 7 项目备案公网IP数量统计 8 项目支出方式统计 9 漏洞类型 10 漏洞危害级别 11 项目最长用时,12 统计各厂商漏洞，13 厂商用时 ） ，level ：0 从高到低，1 从低到高
 * @param level level
 * @param month month
 * @param type type
 * @param week week
 * @param year year
 */
export function getStatisticsByType(data) {
  return request({
	url: '/statistics/getStatisticsByType',
	method: 'get',
	prams: data,
  })
}

/**
 * @description 获取要查询的年份
 */
export function getYearStatistics(data) {
  return request({
	url: '/statistics/getYearStatistics',
	method: 'get',
	prams: data,
  })
}
