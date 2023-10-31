
export interface Collection {
  numberOfGames: number
  games: CollectionItem[]
}

export interface CollectionItem {
  id: number
  title: string,
  yearPublished: number
  image: string
  thumbnail: string
}
