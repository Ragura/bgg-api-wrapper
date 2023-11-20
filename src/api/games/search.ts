import { ofetch } from 'ofetch'
import { mergeAttributes, xmlParser } from '../../utils/parser'
import { GameSearchResult } from '../../types/search'
import { Title } from '../../types/games'
import { renameProperties } from '../../utils/names'

interface MergedResult {
  boardgames: {
    boardgame?: MergedResultGame[]
  }
}

interface MergedResultGame {
  id: number
  name: Array<Title>,
  yearPublished: number
}

export function parseSearchGame(xmlString: string): GameSearchResult[] {
  const resultParsed = xmlParser.parse(xmlString)
  const resultMerged: MergedResult = mergeAttributes(resultParsed)
  if (!resultMerged.boardgames.boardgame)
    return []

  // writeFileSync('logs/search-merged.json', JSON.stringify(resultMerged, undefined, 2));
  const games = resultMerged.boardgames.boardgame
  // writeFileSync('logs/search.json', JSON.stringify(games, undefined, 2));
  const resultRenamedProperties = games.map(game => renameProperties(game))
  return resultRenamedProperties as GameSearchResult[]
}

export async function findGame(name: string) {
  const searchParams = new URLSearchParams({
    search: name,
  })
  const response = await ofetch<string>(`https://www.boardgamegeek.com/xmlapi/search?${searchParams}`)
  // writeFileSync('logs/search.xml', response);
  parseSearchGame(response)
}
