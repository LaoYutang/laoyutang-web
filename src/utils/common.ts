/**
 * @description 获取变量类型的构造函数名
 * @param variables 需要判断变量类型的变量
 * @returns 变量类型
 */
export const getVarType = (variables: any): string => {
  return Object.prototype.toString.call(variables).slice(8, -1)
}
