import { test, describe, expect } from 'bun:test'
import { parseSuggestedPlayers } from '../src/utils/parser'
import { POLL_MERGED } from './fixtures/poll'

describe('poll parser', () => {
  test('correctly parses polls', () => {
    const result = parseSuggestedPlayers(POLL_MERGED as any)
    expect(result).toEqual({
      results: [
        {
          numPlayers: '1',
          best: 0,
          recommended: 5,
          notRecommended: 189
        },
        {
          numPlayers: '2',
          best: 7,
          recommended: 66,
          notRecommended: 162
        },
        {
          numPlayers: '3',
          best: 18,
          recommended: 155,
          notRecommended: 64
        },
        {
          numPlayers: '4',
          best: 103,
          recommended: 135,
          notRecommended: 13
        },
        {
          numPlayers: '5',
          best: 163,
          recommended: 83,
          notRecommended: 10
        },
        {
          numPlayers: '6',
          best: 163,
          recommended: 74,
          notRecommended: 12
        },
        {
          numPlayers: '7',
          best: 64,
          recommended: 120,
          notRecommended: 45
        },
        {
          numPlayers: '8',
          best: 56,
          recommended: 120,
          notRecommended: 51
        },
        {
          numPlayers: '8+',
          best: 7,
          recommended: 17,
          notRecommended: 130
        }
      ],
      totalVotes: 295
    })
  })
})