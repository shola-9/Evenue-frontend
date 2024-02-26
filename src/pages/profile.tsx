import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrMsg } from "../components/global/errMsg";
import { ProfileNav } from "../components/profile/nav";
import { PersonalDetails } from "../components/profile/personalDetails";
import stylesDetails from "../components/profile/styles/personalDetailsFY8.module.css";
import styles from "../components/profile/styles/profileMainJS4.module.css";
import stylesNav from "../components/profile/styles/profileNavZZZ.module.css";
import getProfileFn from "../lib/profile/getProfile";
import { ProfileRes } from "../typesAndInterfaces/profile/getProfile";
import { ProfileEdit } from "./profileEdit";

export const Profile = () => {
  const [profileRes, setProfileRes] = useState<ProfileRes>();
  const [showProfile, setShowProfile] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    try {
      getProfileFn({ setErrMsg }).then((res) => {
        res && setProfileRes(res);
      });
    } catch (error) {}
  }, []);

  function handleShowEdit(e: React.MouseEvent) {
    e.preventDefault();
    setShowProfile(false);
  }

  function handleShowProfile(e: React.MouseEvent) {
    e.preventDefault();
    setShowProfile(true);
  }

  const token = Cookies.get("token");
  if (!token) {
    navigate("/login");
  }

  return (
    <div className={styles.containerJS4}>
      <section>
        <nav className={stylesNav.containerZZZ}>
          <ProfileNav />
        </nav>
        {errMsg ? (
          <div className={styles.errMsg}>
            <ErrMsg errMsg={errMsg} />
          </div>
        ) : (
          profileRes?.profile.map((user) => (
            <article key={user.user_id}>
              <section className={styles.header}>
                <div>
                  {/*TODO: Capitalize first_name preferrably from the database*/}
                  <h2>Hello, {user.first_name}</h2>
                  <p>
                    Joined {user.month.slice(0, 3)}.{user.year}
                  </p>
                </div>
                <div>
                  <div>
                    <img
                      src={user.img}
                      alt="profile"
                    />
                  </div>
                  <div>
                    <p>{user.first_name + " " + user.last_name}</p>
                    <p>{user.email}</p>
                  </div>
                  <div>
                    <img
                      src="/home/bell.svg"
                      alt=""
                    />
                  </div>
                </div>
              </section>
              {showProfile ? (
                <section className={stylesDetails.containerFY8}>
                  <PersonalDetails
                    showProfile={showProfile}
                    handleShowEdit={handleShowEdit}
                    handleShowProfile={handleShowProfile}
                    first_name={user.first_name}
                    last_name={user.last_name}
                    phone_number={user.phone_number ?? ""}
                    country_code={user.country_code ?? "234"}
                    email={user.email}
                  />
                </section>
              ) : (
                <section className={stylesDetails.containerFY8}>
                  <ProfileEdit
                    showProfile={showProfile}
                    handleShowEdit={handleShowEdit}
                    handleShowProfile={handleShowProfile}
                  />
                </section>
              )}
            </article>
          ))
        )}
      </section>
    </div>
  );
};
