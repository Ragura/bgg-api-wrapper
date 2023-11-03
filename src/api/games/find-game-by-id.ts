import { ofetch } from 'ofetch'
import { mergeAttributes, parsePoll, parseRatings, xmlParser } from '../../utils/parser'
import { renameProperties } from '../../utils/names'
import type { Game } from '../../types/games'
import { writeLog } from '../../utils/logs'

export interface findGameByIdOptions {
  comments?: boolean
  historical?: boolean
  stats?: boolean
}

/**
 * Takes in an XML string from BGG and returns a Game object
 * @param xmlResponse The XML response from BGG
 * @returns A Game object representing the parsed game.
 */
export function parseFindGameById(xmlString: string) {
  const resultParsed = xmlParser.parse(xmlString)
  writeLog('find-game-by-id-parsed-xml', resultParsed)
  const resultMerged = mergeAttributes(resultParsed)
  writeLog('find-game-by-id-merged.json', resultMerged)
  const game = parseFindGameByIdGame(resultMerged.boardgames.boardgame[0])
  writeLog('find-game-by-id.json', game)
  return game
}

/**
 * Takes in an XML string from BGG and returns an array of Game objects
 * @param xmlResponse The XML response from BGG
 * @returns An array of game objects representing the parsed games.
 */
export function parseFindGameByIds(xmlString: string) {
  const resultParsed = xmlParser.parse(xmlString)
  writeLog('find-game-by-ids-parsed-xml.json', resultParsed)
  const resultMerged = mergeAttributes(resultParsed)
  writeLog('find-game-by-ids-merged.json', resultMerged)
  const games: Game[] = resultMerged.boardgames.boardgame.map(
    (game: Record<string, any>) => parseFindGameByIdGame(game)
  )
  writeLog('find-game-by-ids.json', games)
  return games
}

/**
 * Parses the parsed XML object of a game retrieved by its ID and returns a Game object.
 * @param rawGame The parsed XML object of the game to parse.
 * @returns A Game object representing the parsed game.
 */
export function parseFindGameByIdGame(merged: Record<string, any>): Game {
  const parsedPoll = parsePoll(merged.poll)
  writeLog('poll.json', parsedPoll)
  merged = {
    ...merged,
    ...parsedPoll,
    ...(merged.statistics && { ratings: parseRatings(merged.statistics) }),
  }
  delete merged.poll
  delete merged.statistics
  const resultRenamedProperties = renameProperties(merged)
  return resultRenamedProperties as Game
}

/**
 * Finds a board game by its ID on BGG.
 * @param id The id of the board game to find.
 * @param options Additional options for the search
 * @param options.comments Whether to include comments in the result.
 * @param options.historical Whether to include historical data in the result.
 * @param options.stats Whether to include stats in the result.
 * @returns A Promise that resolves to the found board game.
 */
export async function findGameById(id: number, options: findGameByIdOptions = {}) {
  const searchParams = new URLSearchParams({
    ...(options.comments && { comments: '1' }),
    ...(options.stats && { stats: '1' }),
  })
  const response = await ofetch<string>(
    `https://www.boardgamegeek.com/xmlapi/boardgame/${id}?${searchParams}`
  )
  writeLog('find-game-by-id.xml', response, false);
  const result = parseFindGameById(response)
  return result
}

/**
 * Find multiple board games by their ID on BGG.
 * @param ids The ids of the board games to find.
 * @param options Additional options for the search
 * @param options.comments Whether to include comments in the result.
 * @param options.historical Whether to include historical data in the result.
 * @param options.stats Whether to include stats in the result.
 * @returns A Promise that resolves to the found board game.
 */
export async function findGameByIds(ids: number[], options: findGameByIdOptions = {}) {
  const searchParams = new URLSearchParams({
    ...(options.comments && { comments: '1' }),
    ...(options.stats && { stats: '1' }),
  })
  const response = await ofetch<string>(
    `https://www.boardgamegeek.com/xmlapi/boardgame/${ids.join(',')}?${searchParams}`
  )
  writeLog('find-game-by-ids.xml', response, false);
  const result = parseFindGameByIds(response)
  return result
}