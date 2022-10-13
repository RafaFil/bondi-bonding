export interface SearchFilters {
  ageRange?: {
    min: number,
    max: number
  }
  gender?: string | null
}
