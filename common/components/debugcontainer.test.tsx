import { expect, test } from 'vitest'
import { DebugString } from './debugcontainer.js'

test('arg is undefined', () => {
  expect(DebugString(undefined)).toBe('undefined')
})

test('arg is null', () => {
  expect(DebugString(null)).toBe('null')
})

test('arg is 1', () => {
  expect(DebugString(1)).toBe('1')
})

test('arg is a', () => {
  expect(DebugString('a')).toBe('a')
})

test('arg is {}', () => {
  expect(DebugString({})).toBe('EmptyObject')
})