import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/moreSZR.module.css";

export const MoreContent = () => {
  const [displayExtras, setDisplayExtras] = useState(false);

  function handleTrueDisplay(
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) {
    e.preventDefault();
    setDisplayExtras(true);
  }

  function handleFalseDisplay(
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) {
    e.preventDefault();
    setDisplayExtras(false);
  }
  return (
    <div className={styles.containerSZR}>
      <button
        onMouseEnter={handleTrueDisplay}
        onMouseLeave={handleFalseDisplay}
      >
        More
      </button>

      {displayExtras && (
        <div
          className={styles.extraContentBox}
          onMouseEnter={handleTrueDisplay}
          onMouseLeave={handleFalseDisplay}
        >
          <Link to="/short-videos">Short videos</Link>{" "}
          <Link to="/groups">Groups</Link>
        </div>
      )}
    </div>
  );
};
