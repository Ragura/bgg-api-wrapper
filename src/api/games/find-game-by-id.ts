import { ofetch } from 'ofetch'
import { mergeAttributes, parsePoll, xmlParser } from '../../utils/parser.js'
import { renameProperties } from '../../utils/names.js'
import type { Game } from 'src/types/games.js'

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
  // writeFileSync('logs/find-game-by-id-parsed-xml.json', JSON.stringify(resultParsed, undefined, 2));
  const resultMerged = mergeAttributes(resultParsed)
  // writeFileSync('logs/find-game-by-id-merged.json', JSON.stringify(resultMerged, undefined, 2));
  const game = parseFindGameByIdGame(resultMerged.boardgames.boardgame[0])
  // writeFileSync('logs/find-game-by-id.json', JSON.stringify(result, undefined, 2));
  return game
}

/**
 * Takes in an XML string from BGG and returns an array of Game objects
 * @param xmlResponse The XML response from BGG
 * @returns An array of game objects representing the parsed games.
 */
export function parseFindGameByIds(xmlString: string) {
  const resultParsed = xmlParser.parse(xmlString)
  // writeFileSync('logs/find-game-by-ids-parsed-xml.json', JSON.stringify(resultParsed, undefined, 2));
  const resultMerged = mergeAttributes(resultParsed)
  // writeFileSync('logs/find-game-by-ids-merged.json', JSON.stringify(resultMerged, undefined, 2));
  const games = resultMerged.boardgames.boardgame.map(
    (game: Record<string, any>) => parseFindGameByIdGame(game)
  )
  // writeFileSync('logs/find-game-by-ids.json', JSON.stringify(games, undefined, 2));
  return games
}

/**
 * Parses the parsed XML object of a game retrieved by its ID and returns a Game object.
 * @param rawGame The parsed XML object of the game to parse.
 * @returns A Game object representing the parsed game.
 */
export function parseFindGameByIdGame(merged: Record<string, any>): Game {
  const parsedPoll = parsePoll(merged.poll)
  // writeFileSync('logs/poll.json', JSON.stringify(parsedPoll, undefined, 2));
  delete merged.poll
  merged = {
    ...merged,
    ...parsedPoll,
  }
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
    ...(options.historical && { historical: '1' }),
    ...(options.stats && { stats: '1' }),
  })
  const response = await ofetch<string>(
    `https://www.boardgamegeek.com/xmlapi/boardgame/${id}?${searchParams}`
  )
  // writeFileSync('logs/find-game-by-id.xml', response);
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
    ...(options.historical && { historical: '1' }),
    ...(options.stats && { stats: '1' }),
  })
  const response = await ofetch<string>(
    `https://www.boardgamegeek.com/xmlapi/boardgame/${ids.join(',')}?${searchParams}`
  )
  // writeFileSync('logs/find-game-by-ids.xml', response);
  const result = parseFindGameByIds(response)
  return result
}