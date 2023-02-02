const DEEPCLONE: { [key: string]: string } = {
  SET: '__DeepClone_Set',
  MAP: '__DeepClone_Map',
  SELF: '__DeepClone_Self',
  OTHER: '__DeepClone_OTHER',
}

interface NodeType {
  parent: any
  key: any
  data: any
  sign: string
}

export const deepClone = (source: any) => {
  // 如果传入原始型变量直接返回
  if (isPrimitVar(source)) return source

  let root: any
  // 创建栈进行深度遍历，防止直接递归造成爆栈
  const stack = new Stack<NodeType>({
    parent: root,
    key: undefined,
    data: source,
    sign: DEEPCLONE.SELF,
  })
  // 创建缓存字典，防止传入对象存在循环引用或相同引用问题
  const cacheMap = new Map()

  // 定义赋值方法
  const assign = (parent: any, key: any, res: any, sign: string) => {
    switch (sign) {
      case DEEPCLONE.SELF: {
        root = res
        break
      }
      case DEEPCLONE.OTHER: {
        parent[key] = res
        break
      }
      case DEEPCLONE.SET: {
        parent.add(res)
        break
      }
      case DEEPCLONE.MAP: {
        parent.set(key, res)
        break
      }
    }
  }

  while (stack.length() > 0) {
    const { parent, key, data, sign } = <NodeType>stack.pop()
    // 原始型变量直接进入下个循环
    if (isPrimitVar(data)) {
      assign(parent, key, data, sign)
      continue
    }
    // 若缓存中存在，直接赋值
    if (cacheMap.has(data)) {
      assign(parent, key, cacheMap.get(data), sign)
      continue
    }

    // 判断类型，分类处理
    const type = getVarType(data)
    switch (type) {
      case 'Date': {
        const res = new Date(data)
        assign(parent, key, res, sign)
        cacheMap.set(data, res)
        break
      }

      case 'RegExp': {
        const res = new RegExp(data.source, data.flags)
        assign(parent, key, res, sign)
        cacheMap.set(data, res)
        break
      }

      case 'Function': {
        assign(parent, key, data, sign)
        break
      }

      case 'Array': {
        const res: Array<any> = []
        assign(parent, key, res, sign)
        cacheMap.set(data, res)
        data.forEach((v: any, k: number) => {
          stack.push({
            parent: res,
            key: k,
            data: v,
            sign: DEEPCLONE.OTHER,
          })
        })
        break
      }

      case 'Object': {
        const res = {}
        assign(parent, key, res, sign)
        cacheMap.set(data, res)
        Object.entries(data)
          .reverse()
          .forEach(([k, v]) => {
            stack.push({
              parent: res,
              key: k,
              data: v,
              sign: DEEPCLONE.OTHER,
            })
          })
        break
      }

      case 'Set':
      case 'WeakSet': {
        const res = new data.constructor()
        assign(parent, key, res, sign)
        cacheMap.set(data, res)
        Array.from(data)
          .reverse()
          .forEach((v: any, k: any) => {
            stack.push({
              parent: res,
              key: k,
              data: v,
              sign: DEEPCLONE.SET,
            })
          })
        break
      }

      case 'Map':
      case 'WeakMap': {
        const res = new data.constructor()
        assign(parent, key, res, sign)
        cacheMap.set(data, res)
        const array = Array.from(data).reverse() as any[][]
        array.forEach(([k, v]) => {
          stack.push({
            parent: res,
            key: k,
            data: v,
            sign: DEEPCLONE.MAP,
          })
        })
        break
      }

      default: {
        console.error(`[typeError] unknown type ${type}`)
      }
    }
  }

  return root
}
