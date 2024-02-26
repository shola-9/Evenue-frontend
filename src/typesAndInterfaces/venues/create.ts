export interface CreateVenue {
  title: string;
  category: string;
  furnishing: string;
  select_type: string;
  imgs: FileList | string;
  bathrooms: string;
  toilets: string;
  starting_price: string;
  location: string;
  no_of_guest: string;
  venue_type: string;
  space_preference: string;
  [key: string]: string | FileList | undefined | Date;
}
