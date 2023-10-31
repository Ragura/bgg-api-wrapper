import { test, describe, expect } from 'bun:test'
import { renameProperties } from 'src/utils/names'

describe('rename properties', () => {
  test('correctly renames properties in object', () => {
    const result = renameProperties({
      titles: [
        {
          name: 'Battleground: Crossbows & Catapults',
        }
      ]
    })
    expect(result).toEqual({
      titles: [
        {
          title: 'Battleground: Crossbows & Catapults'
        }
      ]
    })
  })
})