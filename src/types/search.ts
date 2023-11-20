import { Title } from './games'

export interface GameSearchResult {
  id: number
  titles: Title[]
  yearPublished: number
}