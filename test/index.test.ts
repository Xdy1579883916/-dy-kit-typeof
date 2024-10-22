import { expect, it } from 'vitest'
import { typeOf } from '../src'

it('single parameter case returns type string', () => {
  expect(typeOf()).toBe('Undefined')
  expect(typeOf(void 0)).toBe('Undefined')
  expect(typeOf(null)).toBe('Null')
  expect(typeOf(1)).toBe('Number')
  expect(typeOf('1')).toBe('String')
  expect(typeOf([])).toBe('Array')
  expect(typeOf({})).toBe('Object')
  expect(typeOf(Date)).toBe('Function')
  expect(typeOf(new Date())).toBe('Date')
  expect(typeOf(new Promise(() => {}))).toBe('Promise')
  expect(typeOf(Infinity)).toBe('Number')

  // 'undefined' like single parameter
  expect(typeOf('1', void 0)).toBe('String')
})

it('multiple Parameters', () => {
  expect(typeOf(1, 2)).toBe(true)
  expect(typeOf(1, Number)).toBe(true)
  expect(typeOf(1, Number.name)).toBe(true)
  expect(typeOf(1, 'Number')).toBe(true)
  expect(typeOf(Number.NaN, Number)).toBe(true)
  expect(typeOf(Infinity, Number)).toBe(true)

  expect(typeOf('1', '2')).toBe(true)
  expect(typeOf('1', String)).toBe(true)
  expect(typeOf('1', String.name)).toBe(true)
  expect(typeOf('1', 'String')).toBe(true)

  expect(typeOf([], 'Array')).toBe(true)
  expect(typeOf([], Array)).toBe(true)

  expect(typeOf({}, 'Object')).toBe(true)
  expect(typeOf({}, Object)).toBe(true)
  expect(typeOf(Object.create({}), 'Object')).toBe(true)

  expect(typeOf(new Promise(() => {}), Promise)).toBe(true)
  expect(typeOf(null, null)).toBe(true)
})
