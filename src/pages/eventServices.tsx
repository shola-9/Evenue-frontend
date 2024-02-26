import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Btn1Content } from "../components/eventServices/btn1Content";
import { Btn2Content } from "../components/eventServices/btn2Content";
import { Btn3Content } from "../components/eventServices/btn3Content";
import { DefaultBody } from "../components/eventServices/defaultBody";
import { Hero } from "../components/eventServices/hero";
import LimitedInfoCard from "../components/eventServices/limitedInfoCard";
import { ErrMsg } from "../components/global/errMsg";
import { LoginNotice } from "../components/global/loginNotice";
import eventServicesSearchFn from "../lib/eventsShowcase/search";
import { GetLimitedInfoForAllResponse } from "../typesAndInterfaces/eventServices/getLimitedInfoForAll";
import { SearchFD } from "../typesAndInterfaces/eventServices/searchFD";
import styles from "./styles/eventServicseOTW.module.css";

const EventServices = () => {
  const [formDetails, setFormDetails] = useState<SearchFD>({
    location: "",
    category: "",
  });

  const [eventServices, setEventServices] =
    useState<GetLimitedInfoForAllResponse>();
  const [errMsg, setErrMsg] = useState("");
  const [specificEService, setSpecificEService] = useState(false);
  const [btnPageContent, setBtnPageContent] = useState(<></>);
  const [showLoginErr, setShowLoginErr] = useState(false);
  const token = Cookies.get("token");
  const navigate = useNavigate();

  async function handleSearch(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    try {
      const res = await eventServicesSearchFn({
        location: formDetails.location ?? "",
        category: formDetails.category ?? "",
        setErrMsg,
      });
      console.log({ res });

      setEventServices(res);
      setErrMsg("");
    } catch (error) {}
  }

  const content = eventServices?.result?.map((event) => (
    <LimitedInfoCard
      key={event.id}
      {...event}
    />
  ));

  const btn1Content = <Btn1Content />;
  const btn2Content = <Btn2Content />;
  const btn3Content = <Btn3Content />;

  // on click for buttons to determine
  function handleBtnClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (e.currentTarget.name === "btn1") {
      setSpecificEService(true);
      setBtnPageContent(btn1Content);
    } else if (e.currentTarget.name === "btn2") {
      setSpecificEService(true);
      setBtnPageContent(btn2Content);
    } else if (e.currentTarget.name === "btn3") {
      setSpecificEService(true);
      setBtnPageContent(btn3Content);
    }
  }

  function handleCreateService(e: React.MouseEvent<HTMLButtonElement>) {
    if (!token) {
      console.log("login needed");

      setShowLoginErr(true);
      setTimeout(() => {
        setShowLoginErr(false);
      }, 10000);
      return;
    } else {
      navigate(`/e-service/create-service`);
    }
  }

  return (
    <article className={styles.containerOTW}>
      <Hero
        formDetails={formDetails}
        setFormDetails={setFormDetails}
        handleSearch={handleSearch}
      />
      <div>
        <h3>Service Providers</h3>
        <div>
          <button
            name="btn1"
            onClick={handleBtnClick}
          >
            <img
              src="/home/photographers.svg"
              alt="photographers"
            />
            <span>Photography/ Videographer</span>
          </button>
          <button
            name="btn2"
            onClick={handleBtnClick}
          >
            <img
              src="/home/make_up_artise.svg"
              alt="Make up Artise"
            />
            <span>Make up Artise</span>
          </button>
          <button
            name="btn3"
            onClick={handleBtnClick}
          >
            <img
              src="/home/designers.svg"
              alt="designers"
            />
            <span>Designers</span>
          </button>
        </div>
      </div>
      <div className={styles.addServiceArea}>
        <button onClick={handleCreateService}>Create Service</button>
        {showLoginErr && <LoginNotice />}
      </div>
      {specificEService ? (
        btnPageContent
      ) : eventServices || errMsg ? (
        <>{errMsg ? <ErrMsg errMsg={errMsg} /> : <div>{content}</div>}</>
      ) : (
        <>
          <DefaultBody />
        </>
      )}
    </article>
  );
};
export default EventServices;
