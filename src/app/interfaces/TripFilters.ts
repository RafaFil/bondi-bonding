export interface TripFilters {
  ageRange?: {
    min?: number;
    max?: number;
  }
  gender?: 'Male' | 'Female' | 'Non-binary' | 'Other' | null;
  // Bus schedule
  likes?: ('Music' | 'Movies' | 'Sports' | 'Arts' | 'Food' | 'Coffee' | 'Games' | 'TV' | null)[];
}

export const GENDER_OPTIONS = [ '-- None --', 'Male', 'Female', 'Non-binary', 'Other' ] as const;
export const LIKES_OPTIONS = ['Music' , 'Movies' , 'Sports' , 'Arts' , 'Food' , 'Coffee', 'Games', 'TV']  as const;
