import { test, describe, expect } from 'bun:test'
import { parseSuggestedPlayerAge } from '../src/utils/parser'
import { MERGED_PLAYER_AGE } from './fixtures/player-age'

describe('player age parser', () => {
  test('correctly parses player age recommendations', () => {
    const result = parseSuggestedPlayerAge(MERGED_PLAYER_AGE as any)
    expect(result).toEqual({
      results: [
        {
          age: '2',
          numVotes: 0
        },
        {
          age: '3',
          numVotes: 0
        },
        {
          age: '4',
          numVotes: 0
        },
        {
          age: '5',
          numVotes: 0
        },
        {
          age: '6',
          numVotes: 3
        },
        {
          age: '8',
          numVotes: 23
        },
        {
          age: '10',
          numVotes: 36
        },
        {
          age: '12',
          numVotes: 20
        },
        {
          age: '14',
          numVotes: 4
        },
        {
          age: '16',
          numVotes: 0
        },
        {
          age: '18',
          numVotes: 0
        },
        {
          age: '21 and up',
          numVotes: 0
        }
      ],
      totalVotes: 86
    })
  })
})