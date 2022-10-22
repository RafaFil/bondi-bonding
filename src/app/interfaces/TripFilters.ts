export interface TripFilters {
  ageRange?: {
    min?: number;
    max?: number;
  }
  gender?: 'Male' | 'Female' | 'Non-binary' | 'Other' | null;
  // Bus schedule
}

export const GENDER_OPTIONS = [ '-- None --', 'Male', 'Female', 'Non-binary', 'Other' ] as const;
