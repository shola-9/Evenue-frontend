import { useState } from "react";
import { ErrMsg } from "../components/global/errMsg";
import { DefaultBody } from "../components/venue/defaultBody";
import { Hero } from "../components/venue/hero";
import { SearchResWrapper } from "../components/venue/searchResWrapper";
import searchVenueFn from "../lib/venues/search";
import { AddSearchFD } from "../typesAndInterfaces/venues/addSearchFormData";
import { Res4VenueSearch } from "../typesAndInterfaces/venues/res4Search";
import styles from "./styles/venuesTX4.module.css";

const Venues = () => {
  // state for search
  const [formDetails, setFormDetails] = useState<AddSearchFD>({
    category: "",
    location: "",
    no_of_guest: 0,
    venue_type: "",
    space_preference: 0,
    rating: 0,
  });

  const [venues, setVenues] = useState<Res4VenueSearch>();
  const [errMsg, setErrMsg] = useState("");

  async function handleSearch(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    try {
      const res = await searchVenueFn({
        category: formDetails.category ?? "",
        location: formDetails.location ?? "",
        no_of_guest: formDetails.no_of_guest ?? "",
        venue_type: formDetails.venue_type ?? "",
        space_preference: formDetails.space_preference ?? "",
        rating: formDetails.rating ?? "",
        setErrMsg,
      });
      console.log({ res });

      setVenues(res);
      setErrMsg("");
    } catch (error) {}
  }

  const content = venues?.result?.map((venue) => (
    <SearchResWrapper
      key={venue.id}
      {...venue}
    />
  ));

  return (
    <article>
      <Hero
        formDetails={formDetails}
        setFormDetails={setFormDetails}
        handleSearch={handleSearch}
      />
      <section className={styles.vSectionTX4}>
        {venues || errMsg ? (
          <>
            {errMsg ? (
              <ErrMsg errMsg={errMsg} />
            ) : (
              <div className={styles.containerR58a}>{content}</div>
            )}
          </>
        ) : (
          <>
            <DefaultBody />
          </>
        )}
      </section>
    </article>
  );
};
export default Venues;
