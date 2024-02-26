import styles from "./styles/glamoreAdW1V.module.css";
import { Link } from "react-router-dom";

export const GlamoreAd = () => {
  return (
    <div className={styles.containerW1V}>
      <div>
        <img
          src="/home/Rectangle 111.svg"
          alt="party"
        />
        <Link to="/venues">View</Link> {/* placeholder to attribute */}
      </div>
      <div>
        <img
          src="/home/Rectangle 114.svg"
          alt="party"
        />
        <Link to="/venues">View</Link> {/* placeholder to attribute */}
      </div>
      <div>
        <img
          src="/home/Rectangle 115.svg"
          alt="party"
        />
        <Link to="/venues">View</Link> {/* placeholder to attribute */}
      </div>
    </div>
  );
};
