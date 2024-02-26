import { Upcoming } from "./upcoming";
import { VenueOrEventAd } from "./venueAd";
import { TopEvents } from "./topEvents";
import { GlamoreAd } from "./glamoreAd";
import { GroupSuggestions } from "../groups/suggestions";
import { EBrandsList } from "./eBrandsList";
import { InlineStories } from "../stories/inlineStories";
import styles from "./styles/defaultBodyY2D.module.css";

export const DefaultBody = () => {
  return (
    <div className={styles.containerY2D}>
      <section>
        <InlineStories />
      </section>
      <section>
        <EBrandsList />
      </section>
      <section>
        <Upcoming />
      </section>
      <section>
        {/* placeholder to attribute */}
        <VenueOrEventAd
          props="Find the, BEST, VENUE, for your, Events "
          body="Lorem ipsum dolor sit amet consectetur. Velit viverra rhoncus pharetra in ut sit."
          toAttr="venues"
        />
      </section>
      <section>
        {/* Events by most views */}
        <TopEvents />
      </section>
      <section style={{ rowGap: "0 !important" }}>
        <GlamoreAd />
      </section>
      <section>
        <GroupSuggestions />
      </section>
    </div>
  );
};
