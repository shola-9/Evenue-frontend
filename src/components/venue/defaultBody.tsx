import { GroupSuggestions } from "../groups/suggestions";
import { VenueOrEventAd } from "../home/venueAd";
import { PopularVenues } from "./popularVenues";
import { WeddingVenue } from "./weddingVenues";

export const DefaultBody = () => {
  return (
    <>
      <section>
        <WeddingVenue />
      </section>
      <section>
        {/* placeholder to attribute */}
        <VenueOrEventAd
          props="Find the, BEST, EVENTS, Happening Around you"
          body="Some random words spanning two to three lines. Guess will have to find out."
          toAttr="events"
        />
      </section>
      <section>
        <PopularVenues />
      </section>
      <section id="group">
        <GroupSuggestions />
      </section>
    </>
  );
};
