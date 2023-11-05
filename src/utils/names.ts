/**
 * A mapping of BGG API property names to their corresponding property names in the application.
 */
const nameMapping: Record<string, string> = {
  objectid: 'id',
  yearpublished: 'yearPublished',
  minplayers: 'minPlayers',
  maxplayers: 'maxPlayers',
  playingtime: 'playingTime',
  minplaytime: 'minPlayTime',
  maxplaytime: 'maxPlayTime',
  name: 'titles',
  sortindex: 'sortIndex',
  boardgamepublisher: 'publishers',
  boardgamehonor: 'honors',
  boardgameversion: 'versions',
  boardgamecategory: 'categories',
  boardgamemechanic: 'mechanics',
  boardgamepodcastepisode: 'podcastEpisodes',
  boardgamedeveloper: 'developers',
  boardgamefamily: 'families',
  boardgameartist: 'artists',
  boardgamedesigner: 'designers',
  boardgamegraphicdesigner: 'graphicDesigners',
  boardgameimplementation: 'implementations',
  boardgameaccessory: 'accessories',
  boardgameexpansion: 'expansions',
  videogamebg: 'videoGames',
  boardgamesubdomain: 'subdomains',
  numvotes: 'numVotes',
  numplayers: 'numPlayers',
  totalvotes: 'totalVotes',
  cardset: 'cardSets',
  comment: 'comments',
  usersrated: 'totalRatings',
  friendlyname: 'description',
  bayesaverage: 'bayesAverage',
  averageweight: 'averageWeight',
}

/**
 * An array of strings representing the names of properties that should always be returned as an
 * array instead of a single key-value pair.
 */
export const alwaysArray = [
  'boardgame',
  'item',
  'names',
  'titles',
  'publishers',
  'honors',
  'versions',
  'categories',
  'mechanics',
  'podcastEpisodes',
  'developers',
  'families',
  'artists',
  'designers',
  'graphicDesigners',
  'implementations',
  'accessories',
  'videoGames',
  'subdomains',
  'cardSets',
  'rank',
]

/**
 * Transforms a given BGG attribute name using a predefined mapping object, if available.
 * @param name - The name to transform.
 * @returns The transformed name, or the original name if no mapping is available.
 */
export function transformName(name: string): string {
  return nameMapping[name] || name
}

/**
 * A mapping of property names to their corresponding old and new names.
 * Used to rename properties from the BGG API to the names used in the application.
 */
const propertyNameMappings: Record<string, {
  oldName: string
  newName: string
}> = {
  comments: {
    oldName: 'name',
    newName: 'comment',
  },
  titles: {
    oldName: 'name',
    newName: 'title',
  },
  podcastEpisodes: {
    oldName: 'name',
    newName: 'title',
  },
  implementations: {
    oldName: 'name',
    newName: 'title',
  },
  expansions: {
    oldName: 'name',
    newName: 'title',
  },
  videoGames: {
    oldName: 'name',
    newName: 'title',
  },
}

/**
 * A set of property names that should always be returned as an object, even if they only have one value.
 */
const alwaysObject = new Set([
  'titles'
])

/**
 * Recursively renames properties of an object or array of objects based on a mapping of old property names to new ones.
 * @param obj - The object or array of objects to rename properties for.
 * @param parentKey - The parent key of the object being renamed. Only used during recursive operations.
 * @returns The object or array of objects with renamed properties.
 */
export function renameProperties(obj: any, parentKey?: string): any {
  if (Array.isArray(obj))
    return obj.map((item) => renameProperties(item, parentKey))
  else if (typeof obj === 'object' && obj !== null) {
    const newObj: Record<string, any> = {}
    if (parentKey && Object.keys(propertyNameMappings).includes(parentKey)) {
      obj[propertyNameMappings[parentKey].newName] = obj[propertyNameMappings[parentKey].oldName]
      delete obj[propertyNameMappings[parentKey].oldName]
    }
    for (const [key, value] of Object.entries(obj))
      newObj[key] = renameProperties(value, key)

    return newObj
  } else
    if (parentKey && alwaysObject.has(parentKey))
      return { [propertyNameMappings[parentKey].newName]: obj }
    else
      return obj
}
