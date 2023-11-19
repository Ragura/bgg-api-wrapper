export type CollectionStatus = {
  owned: boolean
  previouslyOwned: boolean
  forTrade: boolean
  want: boolean
  wantToPlay: boolean
  wantToBuy: boolean
  wishlist: boolean
  preordered: boolean
  lastModified: string
};

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
  status: CollectionStatus
}
