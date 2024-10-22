# 类型检测工具

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![License][license-src]][license-href]

提供了一个实用工具函数 typeOf，单个参数返回类型字符串，多个参数验证是否为同一类型。

## Usage 使用方法
### Single Parameter Case 单个参数-类型检测
typeOf 单个参数返回类型字符串：
```javascript
import { typeOf } from '@dy-kit/type-of'

console.log(typeOf()) // 'Undefined'
console.log(typeOf(void 0)) // 'Undefined'
console.log(typeOf(null)) // 'Null'
console.log(typeOf(1)) // 'Number'
console.log(typeOf('1')) // 'String'
console.log(typeOf([])) // 'Array'
console.log(typeOf({})) // 'Object'
console.log(typeOf(Date)) // 'Function'
console.log(typeOf(new Date())) // 'Date'
console.log(typeOf(new Promise(() => {}))) // 'Promise'
console.log(typeOf(Infinity)) // 'Number'
```

### Multiple Parameters 多个参数
typeOf 函数也可以用来验证多个参数是否为同一类型
```javascript
import { typeOf } from '@dy-kit/type-of'

console.log(typeOf(1, 2)) // true
console.log(typeOf(1, Number)) // true
console.log(typeOf(1, 'Number')) // true
console.log(typeOf('1', '2')) // true
console.log(typeOf('1', String)) // true
console.log(typeOf([], 'Array')) // true
console.log(typeOf({}, 'Object')) // true
console.log(typeOf(new Promise(() => {}), Promise)) // true
console.log(typeOf(null, null)) // true
```

## License

[MIT](./LICENSE) License © 2024-PRESENT [XiaDeYu](https://github.com/Xdy1579883916)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@dy-kit/type-of?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@dy-kit/type-of
[npm-downloads-src]: https://img.shields.io/npm/dm/@dy-kit/type-of?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@dy-kit/type-of
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@dy-kit/type-of?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@dy-kit/type-of
[license-src]: https://img.shields.io/github/license/Xdy1579883916/@dy-kit/type-of.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/Xdy1579883916/typeof/blob/main/LICENSE
