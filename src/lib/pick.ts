export type AnyObject = {
  [key: string]: any
}

export function pick(object: AnyObject, keys: string[]): any {
  return keys.reduce((obj: AnyObject, key: string) => {
    if (key in object) {
      obj[key] = object[key]
    }
    return obj
  }, {})
}
