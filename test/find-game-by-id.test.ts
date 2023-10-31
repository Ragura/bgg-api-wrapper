import { test, describe, expect } from 'bun:test'
import { XML, GAME_RESULT } from './fixtures/find-game-by-id'
import { parseFindGameById } from 'src'

describe('find game by id parser', () => {
  test('correctly parses a single game found by id', () => {
    const result = parseFindGameById(XML)
    expect(result).toEqual(GAME_RESULT)
  })
})