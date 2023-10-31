import { XMLParser } from 'fast-xml-parser'
import { alwaysArray, transformName } from './names';
import type {
  LanguageDependence,
  Poll,
  RawLanguageDependenceResult,
  RawSuggestedPlayerAgeResult,
  RawSuggestedPlayersResult,
  SuggestedPlayerAge,
  SuggestedPlayers
} from 'src/types/poll';

/**
 * An instance of the XMLParser class with customized options for parsing XML
 * data coming back from the BGG API.
 */
export const xmlParser = new XMLParser({
  attributesGroupName: 'attributes',
  attributeNamePrefix: '',
  attributeValueProcessor: (name, val, jPath) => {
    if (jPath.includes('poll.results.result') && name === 'value')
      return undefined
    if (name === 'numplayers')
      return undefined
    if (name === 'username')
      return undefined
    return val
  },
  ignoreAttributes: false,
  ignoreDeclaration: true,
  isArray: name => {
    if (alwaysArray.includes(name))
      return true
    return false
  },
  parseAttributeValue: true,
  textNodeName: 'name',
  transformAttributeName: (attributeName) => transformName(attributeName),
  transformTagName: (tagName) => transformName(tagName),
  trimValues: true,
})

/**
 * Transform a parsed XML string so that attributes are merged into the object.
 * Also deletes terms of use property.
 * @param obj Parsed XML object
 * @returns object with attributes properties merged into the object
*/

export function mergeAttributes(
  obj: Record<string, any> | Array<Record<string, any>>
): any {
  if (Array.isArray(obj))
    return obj.map(item => mergeAttributes(item));
  else if (typeof obj === 'object' && obj !== null) {
    if (obj.attributes?.id)
      obj.id = obj.attributes.id
    if (obj.termsofuse)
      delete obj.termsofuse
    if (obj.attributes &&
      Object.keys(obj.attributes).length < 2 &&
      obj.attributes.value
    )
      return obj.attributes.value
    const mergedObj: any = {};
    for (const key in obj)
      if (key === 'attributes')
        Object.assign(mergedObj, obj[key])
      else
        mergedObj[key] = mergeAttributes(obj[key]);

    return mergedObj;
  } else
    return obj;
}

/**
 * Transform suggested player amount data from a poll into a different format.
 * @param result The raw suggested players object from a poll
 * @returns Transformed object in the new format
*/
export function parseSuggestedPlayers(result: RawSuggestedPlayersResult): SuggestedPlayers {
  return {
    results: result.results.map(item => ({
      numPlayers: item.numPlayers,
      best: item.result[0].numVotes,
      recommended: item.result[1].numVotes,
      notRecommended: item.result[2].numVotes,
    })),
    totalVotes: result.totalVotes,
  }
}

/**
 * Transform language dependency data from a poll into a different format.
 * @param result The raw language dependency object from a poll
 * @returns Transformed object in the new format
*/
export function parseLanguageDependence(result: RawLanguageDependenceResult): LanguageDependence {
  return {
    results: result.results.result.map(item => ({
      level: item.level,
      description: item.value,
      numVotes: item.numVotes,
    })),
    totalVotes: result.totalVotes,
  }
}

/**
 * Transform player age data from a poll into a different format.
 * @param result The raw player age object from a poll
 * @returns Transformed object in the new format
*/
export function parseSuggestedPlayerAge(result: RawSuggestedPlayerAgeResult): SuggestedPlayerAge {
  return {
    results: result.results.result.map(item => ({
      age: item.value,
      numVotes: item.numVotes,
    })),
    totalVotes: result.totalVotes,
  }
}

/**
 * Parse the poll property of an attribute-merged object.
 * @param poll The raw poll object.
 * @returns Transformed object in the new format, internally calls separate functions to parse data.
*/
export function parsePoll(poll: Poll) {
  return {
    suggestedPlayers: parseSuggestedPlayers(poll[0]),
    languageDependence: parseLanguageDependence(poll[1]),
    suggestedPlayerAge: parseSuggestedPlayerAge(poll[2]),
  }
}
