import { ofetch } from 'ofetch'
import { xmlParser, mergeAttributes } from '../../utils/parser'
import type { Collection, CollectionStatus } from '../../types/collection'
import { writeLog } from '../../utils/logs'

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
  status: CollectionStatus
}

function parseItem(item: MergedResultItem) {
  return {
    id: item.id,
    title: item.titles[0].name,
    yearPublished: item.yearPublished,
    image: item.image,
    thumbnail: item.thumbnail,
    status: item.status,
  }
}

export function parseCollection(xmlString: string) {
  const resultParsed = xmlParser.parse(xmlString)
  writeLog('collection-parsed-xml.json', resultParsed);
  const mergedItems: MergedResult = mergeAttributes(resultParsed)
  writeLog('collection-merged.json', mergedItems);
  const mergedGames = mergedItems.items.item
  const games = mergedGames.map((item: MergedResultItem) => parseItem(item))
  const collection: Collection = {
    numberOfGames: mergedItems.items.totalitems,
    games,
  }
  writeLog('collection.json', collection);
  return collection
}

export async function findCollection(userName: string) {
  const response = await ofetch<string>(
    `https://www.boardgamegeek.com/xmlapi/collection/${userName}?own,preordered=1`
  )
  writeLog('collection.xml', response, false);
  parseCollection(response)
}
