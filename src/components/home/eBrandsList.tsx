import styles from "./styles/eBrands.module.css";

// array with eBrands images
const eBrands = [
  "/home/Rectangle 111.svg",
  "/home/Rectangle 114.svg",
  "/home/Rectangle 111.svg",
  "/home/Rectangle 114.svg",
  "/home/Rectangle 111.svg",
  "/home/Rectangle 114.svg",
  "/home/Rectangle 111.svg",
  "/home/Rectangle 114.svg",
  "/home/Rectangle 111.svg",
  "/home/Rectangle 114.svg",
  "/home/Rectangle 111.svg",
  "/home/Rectangle 114.svg",
  "/home/Rectangle 111.svg",
  "/home/Rectangle 114.svg",
  "/home/Rectangle 111.svg",
  "/home/Rectangle 114.svg",
  "/home/Rectangle 111.svg",
  "/home/Rectangle 114.svg",
  "/home/Rectangle 111.svg",
  "/home/Rectangle 114.svg",
];

// create a div for each image
export const EBrandsList = () => {
  const eBrandsList = eBrands.map((eBrand, index) => (
    <div
      key={index}
      className={`${styles.card} ${styles.slide} `}
    >
      <div className={styles.slide_track}>
        <img
          src={eBrand}
          alt={`eBrand-${index}`}
        />
      </div>
    </div>
  ));

  return (
    <div className={styles.containerHJ0}>
      <h5>List of essential Group Brands</h5>
      <div className={styles.list}>{eBrandsList}</div>;
      <p>
        The world is going <span>e</span> so are we{" "}
      </p>
    </div>
  );
};
