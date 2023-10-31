import { test, describe, expect } from 'bun:test'
import { XML_SINGLE_GAME, XML_MULTIPLE_GAMES } from './fixtures/collection'
import { parseCollection } from 'src'

describe('collection parser', () => {
  test('correctly parses collection if only one game is inside', () => {
    const result = parseCollection(XML_SINGLE_GAME)
    expect(result).toEqual({
      numberOfGames: 1,
      games: [
        {
          id: 173346,
          title: '7 Wonders Duel',
          yearPublished: 2021,
          image: 'https://cf.geekdo-images.com/zdWuX3vm_DziVdTwTQh4mg__original/img/rcsOrUHL8HdYKDt6WNl8rO5ONUQ=/0x0/filters:format(jpeg)/pic6617327.jpg',
          thumbnail: 'https://cf.geekdo-images.com/zdWuX3vm_DziVdTwTQh4mg__thumb/img/EDUqlbAQB_5SrdZDhdndHSwAc0s=/fit-in/200x150/filters:strip_icc()/pic6617327.jpg'
        },
      ],
    })
  })
  test('correctly parses collection of multiple games', () => {
    const result = parseCollection(XML_MULTIPLE_GAMES)
    expect(result).toEqual({
      numberOfGames: 2,
      games: [
        {
          id: 173346,
          title: '7 Wonders Duel',
          yearPublished: 2021,
          image: 'https://cf.geekdo-images.com/zdWuX3vm_DziVdTwTQh4mg__original/img/rcsOrUHL8HdYKDt6WNl8rO5ONUQ=/0x0/filters:format(jpeg)/pic6617327.jpg',
          thumbnail: 'https://cf.geekdo-images.com/zdWuX3vm_DziVdTwTQh4mg__thumb/img/EDUqlbAQB_5SrdZDhdndHSwAc0s=/fit-in/200x150/filters:strip_icc()/pic6617327.jpg'
        },
        {
          id: 173346,
          title: '7 Wonders Duel',
          yearPublished: 2021,
          image: 'https://cf.geekdo-images.com/zdWuX3vm_DziVdTwTQh4mg__original/img/rcsOrUHL8HdYKDt6WNl8rO5ONUQ=/0x0/filters:format(jpeg)/pic6617327.jpg',
          thumbnail: 'https://cf.geekdo-images.com/zdWuX3vm_DziVdTwTQh4mg__thumb/img/EDUqlbAQB_5SrdZDhdndHSwAc0s=/fit-in/200x150/filters:strip_icc()/pic6617327.jpg'
        },
      ],
    })
  })
})