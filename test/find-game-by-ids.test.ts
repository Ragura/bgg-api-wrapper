import { test, describe, expect } from 'bun:test'
import { XML, GAME_RESULT } from './fixtures/find-game-by-ids'
import { parseFindGameByIds } from 'src'

describe('find game by multiple ids parser', () => {
  test('correctly parses a multiple games found by id', () => {
    const result = parseFindGameByIds(XML)
    expect(result).toEqual(GAME_RESULT)
  })
})