import { test, describe, expect } from 'bun:test'
import { mergeAttributes, xmlParser } from '../src/utils/parser'
import { XML_STRING, PARSED_XML } from './fixtures/parser'

describe('xml parser', () => {
  test('correctly parses XML from BGG Api', () => {
    const response = xmlParser.parse(XML_STRING)
    expect(response).toEqual({
      boardgames: {
        boardgame: [
          {
            titles: [
              {
                name: 'Battleground: Crossbows & Catapults',
                attributes: {
                  primary: true
                }
              }
            ],
            yearPublished: 2007,
            attributes: {
              id: 30328
            }
          }, {
            titles: [
              {
                name: 'Battleground: Crossbows & Catapults – Tower Attack Expansion Pack',
                attributes: {
                  primary: true
                }
              }
            ],
            yearPublished: 2007,
            attributes: {
              id: 30326
            }
          }
        ],
        attributes: {
          termsofuse: 'https://boardgamegeek.com/xmlapi/termsofuse'
        }
      }
    })
  })

  test('correctly merge attributes', () => {
    const merged = mergeAttributes(PARSED_XML.boardgames.boardgame[0])
    expect(merged).toEqual({
      titles: [
        {
          name: 'Battleground: Crossbows & Catapults',
          primary: true
        }
      ],
      yearPublished: 2007,
      id: 30328
    })
  })
})