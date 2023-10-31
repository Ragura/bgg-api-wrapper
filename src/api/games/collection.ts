import { writeFileSync } from 'node:fs'
import { ofetch } from 'ofetch'
import { xmlParser , mergeAttributes } from '../../utils/parser'
import { Collection } from 'src/types/collection'

interface MergedResult {
  items: {
    item: MergedResultItem[]
    totalitems: number
  }
}

interface MergedResultItem {
  id: number
  titles: Array<{
    name: string
  }>,
  yearPublished: number
  image: string
  thumbnail: string
}

function parseItem(item: MergedResultItem) {
  return {
    id: item.id,
    title: item.titles[0].name,
    yearPublished: item.yearPublished,
    image: item.image,
    thumbnail: item.thumbnail,
  }
}

export function parseCollection(xmlString: string): Collection {
  const resultParsed = xmlParser.parse(xmlString)
  const mergedItems: MergedResult = mergeAttributes(resultParsed)
  const mergedGames = mergedItems.items.item
  const games = mergedGames.map((item: MergedResultItem) => parseItem(item))
  const collection: Collection = {
    numberOfGames: mergedItems.items.totalitems,
    games,
  }
  // writeFileSync('logs/collection.json', JSON.stringify(collection, undefined, 2));
  return collection
}

export async function findCollection(userName: string) {
  const searchParams = new URLSearchParams({
    own: '1',
  })
  const response = await ofetch<string>(
    `https://www.boardgamegeek.com/xmlapi/collection/${userName}?${searchParams}`
  )
  writeFileSync('logs/collection.xml', response)
  parseCollection(response)
}
