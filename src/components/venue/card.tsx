import styles from "../event/styles/card.module.css";
import { Link } from "react-router-dom";
import { Share } from "../global/share";
import { useState } from "react";
import { VenueFullInfo } from "../../typesAndInterfaces/venues/getVenue";

export const Card = (props: VenueFullInfo, id: string) => {
  const [showShare, setShowShare] = useState(false);

  const handleShowShare = () => {
    setShowShare((prev) => !prev);
  };
  return (
    <div className={styles.card0OV}>
      <div className={styles.imgDetailsArea}>
        <section className={styles.imgsArea}>
          <div>
            {props.imgs.split(",")[0] && (
              <img
                src={props.imgs.split(",")[0]}
                alt={"Photo of " + props.title}
              />
            )}
          </div>
          <div>
            {props.imgs.split(",")[1] && (
              <img
                src={props.imgs.split(",")[1]}
                alt={"Photo of " + props.title}
              />
            )}
            {props.imgs.split(",")[2] && (
              <img
                src={props.imgs.split(",")[2]}
                alt={"Photo of " + props.title}
              />
            )}
            {props.imgs.split(",")[3] && (
              <img
                src={props.imgs.split(",")[3]}
                alt={"Photo of " + props.title}
              />
            )}
            {props.imgs.split(",")[4] && (
              <img
                src={props.imgs.split(",")[4]}
                alt={"Photo of " + props.title}
              />
            )}
          </div>
        </section>
      </div>
      <section className={styles.cTAArea}>
        <Link
          to="#"
          className={styles.cTA}
        >
          Get Ticket
        </Link>{" "}
        {/* placeholder to attribute */}
        <button onClick={handleShowShare}>
          <img
            src="/home/material-symbols_share.svg"
            alt="share icon"
          />
          share
        </button>
        {showShare && (
          <Share
            uRL={`http://localhost:3000/venue/${props.id}`}
            title={props.title}
            hashtag={`#${props.title.split(" ").join("_")}`}
            summary={props.description.slice(0, 40) + "..."}
            source="https://evenue.com"
          />
        )}
      </section>
      <section>{/* <h4>Google map to location here</h4> */}</section>
      <section>
        <p>{props.description}</p>
      </section>
      <section className={styles.imgsArea2}>
        <div>
          {props.imgs.split(",")[0] && (
            <img
              src={props.imgs.split(",")[0]}
              alt={"Photo of " + props.title}
            />
          )}
        </div>

        <div>
          {props.imgs.split(",")[1] && (
            <img
              src={props.imgs.split(",")[1]}
              alt={"Photo of " + props.title}
            />
          )}
        </div>
        <div>
          {props.imgs.split(",")[2] && (
            <img
              src={props.imgs.split(",")[2]}
              alt={"Photo of " + props.title}
            />
          )}
        </div>
        <div>
          {props.imgs.split(",")[3] && (
            <img
              src={props.imgs.split(",")[3]}
              alt={"Photo of " + props.title}
            />
          )}
        </div>
        <div>
          {props.imgs.split(",")[4] && (
            <img
              src={props.imgs.split(",")[4]}
              alt={"Photo of " + props.title}
            />
          )}
        </div>
      </section>
    </div>
  );
};
