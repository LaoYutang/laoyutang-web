/**
 * 获取变量类型的构造函数名
 * @param variables 需要判断变量类型的变量
 * @returns 变量类型
 */
export const _getVarType = (variables: any): string => {
  return Object.prototype.toString.call(variables).slice(8, -1)
}

/**
 * 判断是否为原始型变量
 * @param variables 需要判断的变量
 * @returns 是否原始型
 */
export const _isPrimitVar = (variables: any): boolean => {
  return [
    'String',
    'Number',
    'Boolean',
    'Null',
    'Undefined',
    'Symbol',
    'Bigint',
  ].includes(_getVarType(variables))
}

/**
 * 防抖函数
 * @param fn 原函数
 * @param delay 延迟间隔
 * @param immediate 是否立即执行
 * @returns 防抖函数
 */
export const _debounce = (
  fn: Function,
  delay: number = 500,
  immediate: boolean = true,
): Function => {
  let timer: NodeJS.Timer
  let flag = false // Timer不能赋值为null 设置一个标志位作为判断
  return function (this: any, ...rest: Array<any>) {
    if (flag) {
      clearTimeout(timer)
    } else if (immediate) {
      fn.apply(this, rest)
    }
    timer = setTimeout(() => {
      if (!immediate) fn.apply(this, rest)
      flag = false
    }, delay)
    flag = true
  }
}

/**
 * 节流函数
 * @param fn 原函数
 * @param delay 延迟间隔
 * @param immediate 是否立即执行
 * @returns 节流函数
 */
export const _throttle = (
  fn: Function,
  delay: number = 500,
  immediate: boolean = true,
): Function => {
  let flag: boolean = false
  return function (this: any, ...rest: Array<any>) {
    if (!flag) {
      if (immediate) fn.apply(this, rest)
      setTimeout(() => {
        if (!immediate) fn.apply(this, rest)
        flag = false
      }, delay)
      flag = true
    }
  }
}
