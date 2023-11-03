import { test, describe, expect } from 'bun:test'
import { parseRatings } from '../src/utils/parser'
import { MERGED_RATINGS } from './fixtures/ratings'

describe('language parser', () => {
  test('correctly parses language dependencies', () => {
    const result = parseRatings(MERGED_RATINGS as any)
    expect(result).toEqual({
      average: 7.06172,
      bayesAverage: 6.90163,
      totalRatings: 23716,
      ranks: [
        {
          description: 'Board Game Rank',
          rank: 557,
          bayesAverage: 6.90163
        },
        {
          description: 'Thematic Rank',
          rank: 179,
          bayesAverage: 6.88411
        },
        {
          description: 'Strategy Game Rank',
          rank: 434,
          bayesAverage: 6.87862
        }
      ]
    }
    )
  })
})