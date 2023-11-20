import { test, describe, expect } from 'bun:test'
import { XML_NONE, XML_SINGLE, XML_MULTIPLE } from './fixtures/search'
import { parseSearchGame } from 'src'

describe('search game parser', () => {
  test('correctly parses searched games when there is no result found', () => {
    const result = parseSearchGame(XML_NONE)
    expect(result).toEqual([])
  })
  test('correctly parses searched games when there is exactly one result', () => {
    const result = parseSearchGame(XML_SINGLE)
    expect(result).toEqual([
      {
        id: 396989,
        titles: [{
          title: 'Evenfall',
          primary: true,
        }],
        yearPublished: 2023
      }
    ])
  })
  test('correctly parses searched games when there are multiple results', () => {
    const result = parseSearchGame(XML_MULTIPLE)
    expect(result).toEqual([
      {
        id: 323156,
        titles: [{ title: 'Stroganov', primary: true }],
        yearPublished: 2021
      },
      {
        id: 388170,
        titles: [{ title: 'Stroganov: Big Box', primary: true }],
        yearPublished: 2024
      },
    ])
  })
})