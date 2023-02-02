declare global {
  interface Promise<T> {
    flat: () => Promise<any>
  }
}

Promise.prototype.flat = function () {
  const that =
    _getVarType(this) === 'Promise'
      ? this
      : Promise.reject('The type must be Promise!')
  return new Promise((resolve) => {
    that
      .then((res: any) => {
        resolve([null, res])
      })
      .catch((err: any) => {
        resolve([err, {}])
      })
  })
}

export {}
