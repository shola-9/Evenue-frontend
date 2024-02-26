import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { OneEventServiceFUInfo } from "../../typesAndInterfaces/eventServices/getFUInfo";
import { Event } from "../../typesAndInterfaces/events/getEvent";
import { formatDate, formatTime } from "../global/formatDate";
import { formatTimestampDiff } from "../global/formatTimeDiff";
import { LoginNotice } from "../global/loginNotice";
import { Share } from "../global/share";
import { PopUp } from "../payment/popUp";
import styles from "./styles/card.module.css";

// Note: class 'oESFI' is only for OneEventServiceFUInfo type

export const Card = (props: Event | OneEventServiceFUInfo, id: string) => {
  const [showShare, setShowShare] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showLoginErr, setShowLoginErr] = useState(false);
  const navigate = useNavigate();

  const handleShowShare = () => {
    setShowShare((prev) => !prev);
  };

  const togglePayment = () => {
    setShowPayment((prev) => !prev);
  };

  if ("bio" in props) {
    const token = Cookies.get("token");
    const hoursId = new Set(props.opening_hours?.map((x) => x.hours_id));

    const handleMsg = () => {
      if (!token) {
        console.log("login needed");

        setShowLoginErr(true);
        setTimeout(() => {
          setShowLoginErr(false);
        }, 10000);
        return;
      } else {
        navigate(`/chat/${props.id}/${props.name}`);
      }
    };

    return (
      <>
        <div className={`${styles.card0OV} ${styles.oESFI}`}>
          <div className={styles.imgDetailsArea}>
            <section className={styles.imgsArea}>
              <div>
                {props.imgs.split(",")[0] && (
                  <img
                    src={props.imgs.split(",")[0]}
                    alt={"Photo of " + props.name}
                  />
                )}
              </div>
            </section>

            <section>
              <div>
                <div>
                  <h1>{props.name}</h1>
                  <h2>{props.profession}</h2>
                  <p>
                    <img
                      src="/home/location_filled.svg"
                      alt="location"
                    />{" "}
                    {props.location}
                  </p>
                  <p>
                    <img
                      src="/home/mail_filled.svg"
                      alt="mail"
                    />{" "}
                    {props.email}
                  </p>
                  <p>
                    <img
                      src="/home/phone_filled.svg"
                      alt="phone"
                    />{" "}
                    {props.phone_number}
                  </p>
                </div>{" "}
                <div>{props.verified && <p>✅ Verified </p>}</div>
              </div>
              <div>
                <div>
                  <h4>Experience</h4>
                </div>
                <div>
                  <p>Over</p>{" "}
                  <p>
                    {formatTimestampDiff(props.experience_duration).includes(
                      "y"
                    )
                      ? formatTimestampDiff(props.experience_duration).replace(
                          "y",
                          " years"
                        )
                      : formatTimestampDiff(props.experience_duration).replace(
                          "m",
                          " minutes"
                        )
                      ? formatTimestampDiff(props.experience_duration).replace(
                          "d",
                          " days"
                        )
                      : formatTimestampDiff(props.experience_duration).replace(
                          "w",
                          " weeks"
                        )
                      ? formatTimestampDiff(props.experience_duration).replace(
                          "h",
                          " hours"
                        )
                      : ""}
                  </p>
                </div>
              </div>
              <div>
                <h4>Bio</h4>
                <p>{props.bio}</p>
              </div>
              <div className={styles.cTAArea}>
                <button
                  onClick={handleShowShare}
                  name="share"
                >
                  <img
                    src="/home/material-symbols_share.svg"
                    alt="share icon"
                  />
                  Share
                </button>
                {showShare && (
                  <Share
                    uRL={`http://localhost:3000/event/${props.id}`}
                    title={props.name}
                    hashtag={`#${props.name.split(" ").join("_")}`}
                    summary={props.name + " " + props.profession}
                    source="https://evenue.com"
                  />
                )}
              </div>
              <section className={styles.cTAArea}>
                <button
                  className={styles.cTA}
                  onClick={handleMsg}
                >
                  message
                </button>
                {showLoginErr && <LoginNotice />}
              </section>
            </section>
          </div>

          {hoursId.has(1) && (
            <section>
              <h3>Opening hours</h3>
              {props.opening_hours?.map((day) => (
                <div key={day.hours_id}>
                  {day.MONDAY_OPEN && day.MONDAY_CLOSE && (
                    <div>
                      <div>Mon</div>{" "}
                      <div>
                        <p>
                          {day.MONDAY_OPEN.slice(0, 5)} -{" "}
                          {day.MONDAY_CLOSE.slice(0, 5)}
                        </p>
                      </div>
                    </div>
                  )}
                  {day.TUESDAY_OPEN && day.TUESDAY_CLOSE && (
                    <div>
                      <div>Tue</div>{" "}
                      <div>
                        <p>
                          {day.TUESDAY_OPEN.slice(0, 5)} -{" "}
                          {day.TUESDAY_CLOSE.slice(0, 5)}
                        </p>
                      </div>
                    </div>
                  )}
                  {day.WEDNESDAY_OPEN && day.WEDNESDAY_CLOSE && (
                    <div>
                      <div>Wed</div>{" "}
                      <div>
                        <p>
                          {day.WEDNESDAY_OPEN.slice(0, 5)} -{" "}
                          {day.WEDNESDAY_CLOSE.slice(0, 5)}
                        </p>
                      </div>
                    </div>
                  )}
                  {day.THURSDAY_OPEN && day.THURSDAY_CLOSE && (
                    <div>
                      <div>Thu</div>{" "}
                      <div>
                        <p>
                          {day.THURSDAY_OPEN.slice(0, 5)} -{" "}
                          {day.THURSDAY_CLOSE.slice(0, 5)}
                        </p>
                      </div>
                    </div>
                  )}
                  {day.FRIDAY_OPEN && day.FRIDAY_CLOSE && (
                    <div>
                      <div>Fri</div>{" "}
                      <div>
                        <p>
                          {day.FRIDAY_OPEN.slice(0, 5)} -{" "}
                          {day.FRIDAY_CLOSE.slice(0, 5)}
                        </p>
                      </div>
                    </div>
                  )}
                  {day.SATURDAY_OPEN && day.SATURDAY_CLOSE && (
                    <div>
                      <div>Sat</div>{" "}
                      <div>
                        <p>
                          {day.SATURDAY_OPEN.slice(0, 5)} -{" "}
                          {day.SATURDAY_CLOSE.slice(0, 5)}
                        </p>
                      </div>
                    </div>
                  )}
                  {day.SUNDAY_OPEN && day.SUNDAY_CLOSE && (
                    <div>
                      <div>Sun</div>{" "}
                      <div>
                        <p>
                          {day.SUNDAY_OPEN.slice(0, 5)} -{" "}
                          {day.SUNDAY_CLOSE.slice(0, 5)}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </section>
          )}
          <section>{/* <h4>Google map to location here</h4> */}</section>

          <section className={styles.imgsArea2}>
            <div>
              {props.imgs.split(",")[0] && (
                <img
                  src={props.imgs.split(",")[0]}
                  alt={"Photo of " + props.name}
                />
              )}
            </div>

            <div>
              {props.imgs.split(",")[1] && (
                <img
                  src={props.imgs.split(",")[1]}
                  alt={"Photo of " + props.name}
                />
              )}
            </div>
            <div>
              {props.imgs.split(",")[2] && (
                <img
                  src={props.imgs.split(",")[2]}
                  alt={"Photo of " + props.name}
                />
              )}
            </div>
            <div>
              {props.imgs.split(",")[3] && (
                <img
                  src={props.imgs.split(",")[3]}
                  alt={"Photo of " + props.name}
                />
              )}
            </div>
            <div>
              {props.imgs.split(",")[4] && (
                <img
                  src={props.imgs.split(",")[4]}
                  alt={"Photo of " + props.name}
                />
              )}
            </div>
          </section>
        </div>
      </>
    );
  } else {
    return (
      <div className={styles.card0OV}>
        {showPayment && (
          <PopUp
            name={props.name}
            price={props.price}
            setShowPayment={setShowPayment}
          />
        )}
        <div className={styles.imgDetailsArea}>
          <section className={styles.imgsArea}>
            <div>
              {props.imgs.split(",")[0] && (
                <img
                  src={props.imgs.split(",")[0]}
                  alt={"Photo of " + props.name}
                />
              )}
            </div>
            <div>
              {props.imgs.split(",")[1] && (
                <img
                  src={props.imgs.split(",")[1]}
                  alt={"Photo of " + props.name}
                />
              )}
              {props.imgs.split(",")[2] && (
                <img
                  src={props.imgs.split(",")[2]}
                  alt={"Photo of " + props.name}
                />
              )}
              {props.imgs.split(",")[3] && (
                <img
                  src={props.imgs.split(",")[3]}
                  alt={"Photo of " + props.name}
                />
              )}
              {props.imgs.split(",")[4] && (
                <img
                  src={props.imgs.split(",")[4]}
                  alt={"Photo of " + props.name}
                />
              )}
            </div>
          </section>

          <section>
            <div>
              <h2>{props.name}</h2> <p>✅ verfied</p>
            </div>
            <div className={styles.venueAndTicket}>
              <div>Venue</div>
              <p>{props.location}</p> {/* placholder venue */}
            </div>
            <div className={styles.venueAndTicket}>
              <div>Tickets</div>
              <p>
                {props.price === 0
                  ? "Free"
                  : `₦${props.price.toLocaleString()}`}
              </p>
            </div>
            <div className={styles.dateAndTimeArea}>
              <div className={styles.dateTimeDiv}>
                <div className={styles.dateTimeContent}>
                  <p className={styles.dateTimeHeader}>
                    <img
                      src="/home/uil_calender.svg"
                      alt="calender"
                    />
                    Start Date
                  </p>
                  <p>{formatDate(props.start_date_and_time.toString())}</p>
                </div>
                <div className={styles.dateTimeContent}>
                  <p className={styles.dateTimeHeader}>
                    <img
                      src="/home/ri_time-line.svg"
                      alt="calender"
                    />
                    Time
                  </p>
                  <div className={styles.timeDiv}>
                    <p>{formatTime(props.start_date_and_time.toString())}</p> -{" "}
                    <p>{formatTime(props.end_date_and_time.toString())}</p>
                  </div>
                </div>
              </div>
              <div className={styles.dateTimeDiv}>
                <div className={styles.dateTimeContent}>
                  <p className={styles.dateTimeHeader}>
                    <img
                      src="/home/uil_calender.svg"
                      alt="calender"
                    />
                    End Date
                  </p>
                  <p>{formatDate(props.end_date_and_time.toString())}</p>
                </div>
                <div className={styles.dateTimeContent}>
                  <p className={styles.dateTimeHeader}>
                    <img
                      src="/home/ri_time-line.svg"
                      alt="calender"
                    />
                    Time
                  </p>
                  <div className={styles.timeDiv}>
                    <p>{formatTime(props.start_date_and_time.toString())}</p> -{" "}
                    <p>{formatTime(props.end_date_and_time.toString())}</p>
                  </div>
                </div>
              </div>
              <div className={styles.dateTimeDiv}>
                <div className={styles.dateTimeContent}>
                  <p className={styles.dateTimeHeader}>
                    <img
                      src="/home/uil_calender.svg"
                      alt="calender"
                    />
                    Days
                  </p>
                  {/* <p>Total no of days</p> */}
                  <p>3 Days</p>
                </div>
                <div className={styles.dateTimeContent}>
                  <p className={styles.dateTimeHeader}>
                    <img
                      src="/home/ri_time-line.svg"
                      alt="calender"
                    />
                    Hours
                  </p>
                  <div className={styles.timeDiv}>
                    {/* <p>Total no of hours</p> */}
                    <p>3hrs 30mins</p>
                  </div>
                </div>
              </div>
            </div>
            <section className={styles.otherDetails}>
              <div>
                <img
                  src="/home/locationPin.svg"
                  alt="location icon"
                />
                <p> {props.location}</p>
              </div>
              <div>
                <img
                  src="/home/ic_round-mail.svg"
                  alt="mail icon"
                />
                <p>event email goes here</p>
              </div>
              <div>
                <img
                  src="/home/gg_phone.svg"
                  alt="phone icon"
                />
                <p>event phone number goes here</p>
              </div>
              <div>
                <img
                  src="/home/mdi_web.svg"
                  alt="web icon"
                />
                <p>{props.url}</p>
              </div>
            </section>
          </section>
        </div>
        <section className={styles.cTAArea}>
          <button
            className={styles.cTA}
            onClick={togglePayment}
          >
            Get Ticket
          </button>{" "}
          {/* placeholder to attribute */}
          <button onClick={handleShowShare}>
            <img
              src="/home/material-symbols_share.svg"
              alt="share icon"
            />
            share
          </button>
          {showShare && (
            <Share
              uRL={`http://localhost:3000/event/${props.event_id}`}
              title={props.name}
              hashtag={`#${props.name.split(" ").join("_")}`}
              summary={props.description.slice(0, 40) + "..."}
              source="https://evenue.com"
            />
          )}
        </section>
        <section>{/* <h4>Google map to location here</h4> */}</section>
        <section>
          <p>{props.description}</p>
        </section>
        <section className={styles.imgsArea2}>
          <div>
            {props.imgs.split(",")[0] && (
              <img
                src={props.imgs.split(",")[0]}
                alt={"Photo of " + props.name}
              />
            )}
          </div>

          <div>
            {props.imgs.split(",")[1] && (
              <img
                src={props.imgs.split(",")[1]}
                alt={"Photo of " + props.name}
              />
            )}
          </div>
          <div>
            {props.imgs.split(",")[2] && (
              <img
                src={props.imgs.split(",")[2]}
                alt={"Photo of " + props.name}
              />
            )}
          </div>
          <div>
            {props.imgs.split(",")[3] && (
              <img
                src={props.imgs.split(",")[3]}
                alt={"Photo of " + props.name}
              />
            )}
          </div>
          <div>
            {props.imgs.split(",")[4] && (
              <img
                src={props.imgs.split(",")[4]}
                alt={"Photo of " + props.name}
              />
            )}
          </div>
        </section>
      </div>
    );
  }
};
