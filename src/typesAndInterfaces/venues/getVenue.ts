export interface VenueFullInfoResponse {
  result: VenueFullInfo[];
}

export interface VenueFullInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  select_type: string;
  bathrooms: number;
  toilets: number;
  starting_price: number;
  location: string;
  no_of_guest: number;
  space_preference: number;
  imgs: string;
}
