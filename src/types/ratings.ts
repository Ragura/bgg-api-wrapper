export type RawRatingsResult = {
  ratings: {
    totalRatings: number
    average: number
    bayesAverage: number
    ranks: {
      rank: {
          type: string,
          id: number,
          titles: {
            title: string
          },
          description: string
          value: number,
          bayesAverage: number
        }[]
      }
      stddev: number
      median: number
      owned: number
      trading: number
      wanting: number
      wishing: number
      numcomments: number
      numweights: number
      averageWeight: number
    }
  page?: number
}

export interface Ratings {
  totalRatings: number
  average: number
  bayesAverage: number
  ranks: Rank[]
  averageWeight: number
}

export interface Rank {
  description: string
  rank: number
  bayesAverage: number
}