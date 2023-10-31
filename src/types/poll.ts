export type RawSuggestedPlayersResultItem = {
  numPlayers: string
  result: Array<{
    value: string
    numVotes: number
  }>
}

export interface RawLanguageDependenceResultItem {
  result: Array<{
    level: number
    value: string
    numVotes: number
  }>
}

export interface RawSuggestedPlayerAgeResultItem {
  result: Array<{
    value: string
    numVotes: number
  }>
}

export interface RawSuggestedPlayersResult {
  results: RawSuggestedPlayersResultItem[]
  name: 'suggested_numplayers'
  title: 'User Suggested Number of Players'
  totalVotes: number
}
export interface RawLanguageDependenceResult {
  results: RawLanguageDependenceResultItem
  name: 'language_dependence'
  title: 'Language Dependence'
  totalVotes: number
}

export interface RawSuggestedPlayerAgeResult {
  results: RawSuggestedPlayerAgeResultItem
  name: 'suggested_playerage'
  title: 'User Suggested Player Age'
  totalVotes: number
}

export type Poll = [
  RawSuggestedPlayersResult,
  RawLanguageDependenceResult,
  RawSuggestedPlayerAgeResult
]

export interface SuggestedPlayersResult {
  numPlayers: string
  'best': number
  'recommended': number
  'notRecommended': number
}

export interface SuggestedPlayers {
  totalVotes: number
  results: SuggestedPlayersResult[]
}

export interface LanguageDependenceResult {
  level: number
  description: string
  numVotes: number
}

export interface LanguageDependence {
  totalVotes: number
  results: LanguageDependenceResult[]
}

export type SuggestedPlayerAgeResult = {
  age: string,
  numVotes: number
}

export interface SuggestedPlayerAge {
  totalVotes: number
  results: SuggestedPlayerAgeResult[]
}