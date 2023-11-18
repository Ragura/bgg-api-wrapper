import { test, describe, expect } from 'bun:test'
import { XML_SINGLE_GAME, XML_MULTIPLE_GAMES, SINGLE_GAME, MULTIPLE_GAMES } from './fixtures/collection'
import { parseCollection } from 'src'

describe('collection parser', () => {
  test('correctly parses collection if only one game is inside', () => {
    const result = parseCollection(XML_SINGLE_GAME)
    console.log(result.games[0].status)
    expect(result).toEqual(SINGLE_GAME)
  })
  test('correctly parses collection of multiple games', () => {
    const result = parseCollection(XML_MULTIPLE_GAMES)
    expect(result).toEqual(MULTIPLE_GAMES)
  })
})