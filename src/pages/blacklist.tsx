import { BlacklistEvents } from "../components/blacklist/events";
import { Hero } from "../components/blacklist/hero";
import { BlacklistVenue } from "../components/blacklist/venues";

const Blacklist = () => {
  return (
    <article>
      <Hero />
      <section>
        <BlacklistVenue />
      </section>
      <section>
        <BlacklistEvents />
      </section>
    </article>
  );
};
export default Blacklist;
