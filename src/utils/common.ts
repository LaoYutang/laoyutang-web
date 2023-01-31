/**
 * @description 获取变量类型的构造函数名
 * @param variables 需要判断变量类型的变量
 * @returns 变量类型
 */
export const getVarType = (variables: any): string => {
  return Object.prototype.toString.call(variables).slice(8, -1)
}

/**
 * @description 深拷贝方法
 * @param source 需要深拷贝的变量
 * @returns 深拷贝后的变量
 */
export const deepClone = (source: any): any => {
  const type = getVarType(source)

  switch (type) {
    // 数组
    case 'Array': {
      const target: Array<any> = []
      for (const val of source) {
        target.push(deepClone(val))
      }
      return target
    }
    // 集合
    case 'Set': {
      const target: Set<any> = new Set()
      for (const val of source) {
        target.add(deepClone(val))
      }
      return target
    }
    // 对象
    case 'Object': {
      const target: { [key: string]: any } = new Object()
      for (const [key, val] of Object.entries(source)) {
        target[key] = deepClone(val)
      }
      return target
    }
    // 字典
    case 'Map': {
      const target: Map<any, any> = new Map()
      for (const [key, val] of source) {
        target.set(key, deepClone(val))
      }
      return target
    }
    // 其他
    default: {
      return source
    }
  }
}
