/**
 * List构建树方法
 * @param list 需要构建成树的List
 * @param props id 对象自身标识 parentId对象父节点标识 children最后输出子节点数据的属性名
 * @returns 生成树后的根节点数组
 */
export const _structTree = (
  list: any[],
  props?: { id?: string; parentId?: string; children?: string },
) => {
  // 默认值
  const attrs = Object.assign(
    {
      id: 'id',
      parentId: 'parentId',
      children: 'children',
    },
    props,
  )

  // 临时存储子节点数组的字典
  const temp = new Map<string | number, any>()
  // 储存根节点，减少复杂度
  const result = []

  for (const data of list) {
    const { [attrs.id]: id, [attrs.parentId]: parentId } = data
    // 确保temp中存在该节点的子节点数组
    if (!temp.has(id)) temp.set(id, [])

    if (parentId) {
      // 如果parentId存在，放进map中对应的位置
      if (temp.has(parentId)) {
        temp.get(parentId).push(data)
      } else {
        temp.set(parentId, [data])
      }
    } else {
      // 如果parentId为undefined,null,0,"" 则认为是根节点，记录结果
      result.push(data)
    }

    // 绑定children
    data[attrs.children] = temp.get(id)
  }

  return result
}
