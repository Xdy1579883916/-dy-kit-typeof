export type SameType = boolean
export type ConstructorName = string
export type Constructor = new (...args: any[]) => any

export function hasConstruct<T>(value: T): value is T & Constructor {
  return typeof value === 'function' && value instanceof Function
}

function getTargetType(data: any): string {
  return Object.prototype.toString.call(data).slice(8, -1)
}

export function typeOf(data?: any): string
export function typeOf(data: any, typeOrTypeLike: ConstructorName | Constructor | any): SameType

export function typeOf(data: any, typeOrTypeLike?: ConstructorName | Constructor | any): string | SameType {
  const target_type = getTargetType(data)

  if (typeOrTypeLike !== undefined) {
    if (typeof typeOrTypeLike === 'string' && hasConstruct((globalThis as any)[typeOrTypeLike] as Constructor)) {
      return target_type === typeOrTypeLike
    }
    if (hasConstruct(typeOrTypeLike)) {
      return target_type === typeOrTypeLike.name
    }

    return target_type === getTargetType(typeOrTypeLike)
  }

  return target_type
}
