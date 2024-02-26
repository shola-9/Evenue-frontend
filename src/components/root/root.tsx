import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./rootUS3.module.css";
import Footer from "../global/footer";
import Cookies from "js-cookie";
import { Parent } from "../logOut/parent";
import { MoreContent } from "../header/more";
import logOutFn from "../../lib/users/logOut";
import { useState } from "react";

const Root = () => {
  const location = useLocation();
  const token = Cookies.get("token");
  const [errMsg, setErrMsg] = useState("");
  console.log(token);

  async function handleLogOut() {
    await logOutFn({ setErrMsg });
  }

  return (
    <>
      <nav className={styles.navUS3}>
        <div>
          <Link to="/">LOGO</Link>
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? `${styles.current}`
                : `${styles.nonActive}`
            }
          >
            Home
          </Link>
          <Link
            to="venues"
            className={
              location.pathname === "/venues"
                ? `${styles.current}`
                : `${styles.nonActive}`
            }
          >
            Venues
          </Link>
          <Link
            to="ticketing"
            className={
              location.pathname === "/ticketing"
                ? `${styles.current}`
                : `${styles.nonActive}`
            }
          >
            Ticketing
          </Link>
          <Link
            to="event-services"
            className={
              location.pathname === "/event-services"
                ? `${styles.current}`
                : `${styles.nonActive}`
            }
          >
            Event Services
          </Link>
          <Link
            to="event-showcase"
            className={
              location.pathname === "/event-showcase"
                ? `${styles.current}`
                : `${styles.nonActive}`
            }
          >
            Event Showcase
          </Link>
          <Link
            to="about"
            className={
              location.pathname === "/about"
                ? `${styles.current}`
                : `${styles.nonActive}`
            }
          >
            About
          </Link>
          <Link
            to="blacklist"
            className={
              location.pathname === "/blacklist"
                ? `${styles.current}`
                : `${styles.nonActive}`
            }
          >
            Blacklist
          </Link>
          <div
            style={{
              color: "black",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <MoreContent />
          </div>
        </div>
        {!token || token === undefined ? (
          <div>
            <Link
              to="sign-up"
              className={
                location.pathname === "/sign-up"
                  ? `${styles.current}`
                  : `${styles.nonActive}`
              }
            >
              Sign up
            </Link>
            <Link
              to="login"
              className={
                location.pathname === "/login"
                  ? `${styles.current}`
                  : `${styles.nonActive}`
              }
            >
              Login
            </Link>
          </div>
        ) : (
          <>
            {/* parent of log out */}
            <Parent handleLogOut={handleLogOut} />
          </>
        )}
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default Root;
