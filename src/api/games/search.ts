import { writeFileSync } from 'node:fs'
import { ofetch } from 'ofetch'
import { mergeAttributes, xmlParser } from '../../utils/parser'

interface GameSearchResult {
  id: number
  title: string
  yearPublished: number
}

interface MergedResult {
  boardgames: {
    boardgame?: MergedResultGame[]
  }
}

interface MergedResultGame {
  id: number
  titles: Array<{
    name: string
    primary?: boolean
  }>,
  yearPublished: number
}

function parseBoardGame(boardGame: MergedResultGame) {
  return {
    id: boardGame.id,
    title: typeof boardGame.titles[0] === 'string'
      ? boardGame.titles[0]
      : boardGame.titles[0].name,
    yearPublished: boardGame.yearPublished,
  }
}

export function parseSearchGame(xmlString: string): GameSearchResult[] {
  const resultParsed = xmlParser.parse(xmlString)
  const resultMerged: MergedResult = mergeAttributes(resultParsed)
  if (!resultMerged.boardgames.boardgame)
    return []

  writeFileSync('logs/search-merged.json', JSON.stringify(resultMerged, undefined, 2));
  const games = resultMerged.boardgames.boardgame.map(
    (boardGame: MergedResultGame) => parseBoardGame(boardGame)
  )
  writeFileSync('logs/search.json', JSON.stringify(games, undefined, 2));
  return games
}

export async function findGame(name: string) {
  const searchParams = new URLSearchParams({
    search: name,
  })
  const response = await ofetch<string>(`https://www.boardgamegeek.com/xmlapi/search?${searchParams}`)
  writeFileSync('logs/search.xml', response);
  parseSearchGame(response)
}
