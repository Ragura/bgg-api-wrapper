import { LanguageDependence, SuggestedPlayerAge, SuggestedPlayers } from './poll'
import { Ratings } from './ratings'

export interface Title {
  title: string
  primary?: boolean
  sortIndex?: number
}

export interface Publisher {
  id: number
  name: string
}
export interface Honor {
  id: number
  name: string
}

export interface Version {
  id: number
  name: string
}

export interface Category {
  id: number
  name: string
}

export interface Mechanic {
  id: number
  name: string
}

export interface PodcastEpisode {
  id: number
  title: string
}

export interface Developer {
  id: number
  name: string
}

export interface Family {
  id: number
  name: string
}

export interface Artist {
  id: number
  name: string
}

export interface Designer {
  id: number
  name: string
}

export interface GraphicDesigner {
  id: number
  name: string
}

export interface Implementation {
  id: number
  title: string
}

export interface Expansion {
  id: number
  inbound?: boolean
  title: string
}

export interface Accessory {
  id: number
  name: string
}

export interface VideoGame {
  id: number
  title: string
}

export interface CardSet {
  id: number
  name?: string
}

export interface SubDomain {
  id: number
  name: string
}

export interface GameComment {
  comment: string
  username: string
  rating: number | string
}

export interface Game {
  id: number
  yearPublished: number
  minPlayers: number
  maxPlayers: number
  playingTime: number
  minPlayTime: number
  maxPlayTime: number
  age: number
  titles: Title[]
  description: string
  thumbnail: string
  image: string
  publishers: Publisher[]
  honors: Honor[]
  versions: Version[]
  categories: Category[]
  mechanics: Mechanic[]
  podcastEpisodes: PodcastEpisode[]
  families?: Family[]
  artists: Artist[]
  designers: Designer[]
  graphicDesigners?: GraphicDesigner[]
  implementations?: Implementation[]
  expansions?: Expansion[]
  accessories?: Accessory[]
  videoGames?: VideoGame[]
  cardSets?: CardSet[]
  subdomains: SubDomain[]
  suggestedPlayers?: SuggestedPlayers
  languageDependence?: LanguageDependence
  suggestedPlayerAge?: SuggestedPlayerAge
  comments?: GameComment[]
  ratings?: Ratings
}
