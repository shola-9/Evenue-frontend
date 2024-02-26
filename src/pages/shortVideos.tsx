import { useEffect, useState } from "react";
import { GetShortVidsRes } from "../typesAndInterfaces/shortVideos/getLimitedInfo";
import getShortVideosFn from "../lib/shortVideos/getLimitedInfo";
import { VideoCard } from "../components/global/videoCard";
import styles from "./styles/shortVideosOPC.module.css";
import { ErrMsg } from "../components/global/errMsg";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { LoginNotice } from "../components/global/loginNotice";

export const ShortVideos = () => {
  const [vidsRes, setVidsRes] = useState<GetShortVidsRes>();
  const [errMsg, setErrMsg] = useState("");
  const [showLoginErr, setShowLoginErr] = useState(false);
  const token = Cookies.get("token");
  const navigate = useNavigate();

  useEffect(() => {
    try {
      getShortVideosFn({ setErrMsg }).then((res) => {
        setVidsRes(res);
      });
    } catch (error) {}
  }, []);

  const vidsResContent = vidsRes?.result.map((vid) => (
    <VideoCard
      key={vid.id}
      {...vid}
    />
  ));

  function handleNavigate2PostVideo() {
    if (!token) {
      console.log("login needed");

      setShowLoginErr(true);
      setTimeout(() => {
        setShowLoginErr(false);
      }, 10000);
      return;
    } else {
      navigate("/upload-short-videos");
    }
  }
  return (
    <>
      {errMsg ? (
        <ErrMsg errMsg={errMsg} />
      ) : (
        <div className={styles.containerOPC}>
          <div>
            <button onClick={handleNavigate2PostVideo}>Post video</button>
            {showLoginErr && <LoginNotice />}
          </div>
          <div className={styles.vidsArea}>{vidsResContent}</div>
        </div>
      )}
    </>
  );
};
