
export interface SearchRequest {
  myAge: number,
  myGender: string,
  from?: string | null,
  to?: string | null,
  filters?: {
    ageRange?: {
      min?: number,
      max?: number
    },
    gender?: string | null,
    likes?: ('Music' | 'Movies' | 'Sports' | 'Arts' | 'Food' | 'Coffee' | 'Games' | 'TV' | null)[];
  }
}
