import { Search } from "../../typesAndInterfaces/events/search";
import { handleInputChange } from "../global/handleInputChange";
import styles from "./styles/heroAM1.module.css";

interface Props {
  formDetails: Search;
  setFormDetails: React.Dispatch<React.SetStateAction<Search>>;
  handleSearch: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Hero = ({ formDetails, setFormDetails, handleSearch }: Props) => {
  return (
    <div className={styles.containerAM1}>
      <div className={styles.contentBox}>
        <h1>
          <span>Discover</span> where the <span>Fun</span> is
        </h1>
        <div>
          <div>
            <div>
              <input
                type="text"
                placeholder="Search Events"
                name="name"
                value={formDetails.name}
                onChange={(e) => handleInputChange(e, setFormDetails)}
              />
              <input
                type="text"
                placeholder="Location"
                name="location"
                value={formDetails.location}
                onChange={(e) => handleInputChange(e, setFormDetails)}
              />
              <input
                type="text"
                placeholder="Category"
                name="category"
                value={formDetails.category}
                onChange={(e) => handleInputChange(e, setFormDetails)}
              />
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};
