export interface Movie {
    page: number
    dates: Dates
    results?: (ResultsEntity)[] | null
    total_pages: number
    total_results: number
  }
  
  export interface Dates {
    minimum: string
    maximum: string
  }
  
  export interface ResultsEntity {
    name: string
    adult: boolean
    backdrop_path: string
    genre_ids?: (number)[] | null
    id: number
    original_language: string
    original_title: string
    title: string
    video: boolean
    vote_average: number
    year: number
    director: string
    genre: string[]
  }
  