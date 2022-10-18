export interface TripFilters {
  ageRange?: {
    min?: number;
    max?: number;
  }
  gender?: 'Male' | 'Female' | 'Non-binary' | 'Other' | null;
}

export const GENDER_OPTIONS = [ '-- None --', 'Male', 'Female', 'Non-binary', 'Other' ] as const;
