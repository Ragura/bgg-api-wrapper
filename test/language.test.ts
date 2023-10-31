import { test, describe, expect } from 'bun:test'
import { parseLanguageDependence } from '../src/utils/parser'
import { MERGED_LANGUAGE } from './fixtures/language'

describe('language parser', () => {
  test('correctly parses language dependencies', () => {
    const result = parseLanguageDependence(MERGED_LANGUAGE as any)
    expect(result).toEqual({
      results: [
        {
          level: 1,
          description: 'No necessary in-game text',
          numVotes: 7
        },
        {
          level: 2,
          description: 'Some necessary text - easily memorized or small crib sheet',
          numVotes: 22
        },
        {
          level: 3,
          description: 'Moderate in-game text - needs crib sheet or paste ups',
          numVotes: 50
        },
        {
          level: 4,
          description: 'Extensive use of text - massive conversion needed to be playable',
          numVotes: 1
        },
        {
          level: 5,
          description: 'Unplayable in another language',
          numVotes: 0
        }
      ],
      totalVotes: 80
    })
  })
})