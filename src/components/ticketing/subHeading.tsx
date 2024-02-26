import { Link } from "react-router-dom";
import styles from "./styles/subHeadingOO2.module.css";

export const SubHeading = () => {
  return (
    <div className={styles.containerOO2}>
      <div>
        <h4>Start an Event and Get Tickets for them</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur. Integer augue at vitae sed
          integer porttitor sed ultrices ornare.
        </p>
        <Link to="/create-event">Create an Event</Link>{" "}
        {/* placeholder to attribute */}
      </div>
      <div>
        <img
          src="/home/Rectangle 198.svg"
          alt="create event"
        />
      </div>
    </div>
  );
};
