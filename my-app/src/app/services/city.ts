export interface City {
  term: string;
  moresuggestions: number;
  autoSuggestInstance?: null;
  trackingID: string;
  misspellingfallback: boolean;
  suggestions?: (SuggestionsEntity)[] | null;
}
export interface SuggestionsEntity {
  group: string;
  entities?: (EntitiesEntity)[] | null;
}
export interface EntitiesEntity {
  geoId: string;
  destinationId: string;
  landmarkCityDestinationId?: string | null;
  type: string;
  caption: string;
  redirectPage: string;
  latitude: number;
  longitude: number;
  name: string;
}
