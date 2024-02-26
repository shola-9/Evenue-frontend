import { Link } from "react-router-dom";
import styles from "./styles/footerMR6.module.css";

const Footer = () => {
  return (
    <div className={styles.footerMR6}>
      <div>
        <h6>About</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur. Ullamcorper bibendum diam
          sapien faucibus. Dolor in nibh malesuada pharetra aenean eu rhoncus.
          Non tortor sagittis metus vitae nunc. Varius congue faucibus lacus
          pharetra nisl risus. Bibendum integer fringilla id ante fusce varius
          eget.
        </p>
        <Link to="/about">Learn more</Link> {/* placeholder to attribute */}
      </div>
      <div>
        <h6>Company</h6>

        <p>
          <Link to="/about">About</Link>
        </p>
        <p>
          <Link to="/contact">Contact</Link>
        </p>
        <p>
          <Link to="/terms">Terms</Link>
        </p>
        <p>
          <Link to="/privacy">Privacy</Link>
        </p>
        <p>
          <Link to="/about">About</Link>
        </p>
        <p>
          <Link to="/contact">Contact</Link>
        </p>
        <p>
          <Link to="/terms">Terms</Link>
        </p>
        <p>
          <Link to="/privacy">Privacy</Link>
        </p>
        <p>
          <Link to="/privacy">Privacy</Link>
        </p>
      </div>
      <div>
        <p>
          <Link to="/contact">Contact</Link>
        </p>
        <p>
          <Link to="/terms">Terms</Link>
        </p>
        <p>
          <Link to="/privacy">Privacy</Link>
        </p>
        <p>
          <Link to="/privacy">Privacy</Link>
        </p>
      </div>
      <div>
        <h6>Follow</h6>
        <div>
          <Link to="/contact">
            <img
              src="/home/ic_baseline-facebook.svg"
              alt="facebook"
            />
          </Link>

          <Link to="/contact">
            <img
              src="/home/Vector.svg"
              alt="ig"
            />
          </Link>

          <Link to="/contact">
            <img
              src="/home/mdi_linkedin.svg"
              alt="linkedin"
            />
          </Link>

          <Link to="/contact">
            <img
              src="/home/ph_x-fill.svg"
              alt="x"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
