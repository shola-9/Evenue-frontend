import { LoneVid } from "../../typesAndInterfaces/shortVideos/getAllInfo";
import { VideoCard } from "./videoCard";
import styles from "./styles/videoCardEFM.module.css";
import { formatTimestampDiff } from "./formatTimeDiff";
import { Share } from "./share";
import { useState } from "react";
import { AddCommentForm } from "../shortVideos/addCommentForm";
import addLikeFn from "../../lib/shortVideos/addLike";
import { InlineErrMsg } from "./inlineErrMsg";
import { InlineSuccessMsg } from "./inllineSuccessMsg";
import unLikeFn from "../../lib/shortVideos/unLike";
import { OneStory } from "../../typesAndInterfaces/stories/res4AllStories";
interface Props extends LoneVid {
  bigPage?: boolean;
}

interface Props1 extends OneStory {
  bigPage?: boolean;
}
export const VideoCardAllInfo = (props: Props | Props1) => {
  const [hideShare, setHideShare] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState("");

  if ("first_name" in props) {
    return (
      <div className={styles.cardEFM}>
        <div>
          <VideoCard {...props} />
        </div>
        <div className={styles.cardInfo}>
          <section>
            <div>
              <div className={styles.userImgBox}>
                <img
                  src={props.img}
                  alt={`${props.first_name} ${props.last_name}`}
                />
              </div>
              <div>
                <h3>
                  {props.first_name} {props.last_name}
                </h3>
              </div>
              {/* <div>
                <p>{formatTimestampDiff(props.posted_on)}</p>
              </div> */}
            </div>
            <div>
              <div>
                <img
                  src="/home/download_icon.svg"
                  alt="download"
                  onClick={() => {
                    const videoUrl = props.video;
                    fetch(videoUrl)
                      .then((response) => response.blob())
                      .then((blob) => {
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.href = url;
                        a.download = `${props.first_name} ${props.last_name}.mp4`; // Change the filename as needed
                        a.click();
                        URL.revokeObjectURL(url);
                      });
                  }}
                  className={styles.actionIcon}
                />
              </div>
              {/* <div>
                <img
                  src="/home/share.svg"
                  alt="share"
                  onClick={() => setHideShare((prev) => !prev)}
                  className={styles.actionIcon}
                />
              </div>  */}

              {/* {!hideShare && (
                <Share
                  uRL={`http://localhost:3000/stories/${props.id}`}
                  title={`${props.first_name} ${props.last_name} story`}
                  hashtag="#evenueStory"
                  summary={`${props.first_name}'s ${props.last_name} story`}
                  source="https://evenue.com"
                />
              )} */}
            </div>
          </section>
        </div>
        {errMsg && <InlineErrMsg errMsg={errMsg} />}
        {success && <InlineSuccessMsg successMsg={success} />}
      </div>
    );
  }
  return (
    <div className={styles.cardEFM}>
      <div>
        <VideoCard {...props} />
      </div>
      <div className={styles.cardInfo}>
        <section>
          <div>
            <div className={styles.userImgBox}>
              <img
                src={props.video_user_img}
                alt={`${props.video_user_first_name} ${props.video_user_last_name}`}
              />
            </div>
            <div>
              <h3>
                {props.video_user_first_name} {props.video_user_last_name}
              </h3>
            </div>
            <div>
              <p>{formatTimestampDiff(props.posted_on)}</p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="/home/download_icon.svg"
                alt="download"
                onClick={() => {
                  const videoUrl = props.video;
                  fetch(videoUrl)
                    .then((response) => response.blob())
                    .then((blob) => {
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement("a");
                      a.href = url;
                      a.download = `${props.video_user_first_name} ${props.video_user_last_name}.mp4`; // Change the filename as needed
                      a.click();
                      URL.revokeObjectURL(url);
                    });
                }}
                className={styles.actionIcon}
              />
            </div>
            <div>
              <img
                src="/home/share.svg"
                alt="share"
                onClick={() => setHideShare((prev) => !prev)}
                className={styles.actionIcon}
              />
            </div>
            <div>
              {props.user_has_liked === 1 ? (
                <img
                  src="/home/likeRed.svg"
                  alt="like"
                  className={styles.actionIcon}
                  onClick={() =>
                    unLikeFn({ video_id: props.id, setErrMsg }).then((data) => {
                      if (data?.message.includes("successfull")) {
                        setSuccess(data.message);
                      }
                    })
                  }
                />
              ) : (
                <img
                  src="/home/black-outline_like.svg"
                  alt="unlike"
                  className={styles.actionIcon}
                  onClick={() =>
                    addLikeFn({ video_id: props.id, setErrMsg }).then(
                      (data) => {
                        if (data?.message.includes("successfully")) {
                          setSuccess(data.message);
                        }
                      }
                    )
                  }
                />
              )}

              <p>{props.likes}</p>
            </div>
            {!hideShare && (
              <Share
                uRL={`http://localhost:3000/short-videos/${props.id}`}
                title={`${props.video_user_first_name} ${props.video_user_last_name} short video`}
                hashtag="#evenueShortVideo"
                summary={props.description.slice(0, 100)}
                source="https://evenue.com"
              />
            )}
          </div>
          <div>
            <p>
              <span>
                {props.video_user_first_name} {props.video_user_last_name}:
              </span>{" "}
              {props.description}
            </p>
          </div>
          <section>
            <AddCommentForm video_id={props.id} />
          </section>
        </section>
        {props.comments && (
          <section>
            {props.comments.slice(0, 4).map((comment) => (
              <div key={comment.comment_id}>
                <div className={styles.commentatorInfo}>
                  <div>
                    {comment.commentator_img && (
                      <img
                        src={comment.commentator_img}
                        alt={`${comment.commentator_username}`}
                      />
                    )}
                  </div>
                  <div>
                    <p>{comment.commentator_username}</p>
                  </div>
                  <div>
                    {comment.created_at && (
                      <p>{formatTimestampDiff(comment.created_at)}</p>
                    )}
                  </div>
                </div>
                <div>
                  <p>{comment.comment}</p>
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
      {errMsg && <InlineErrMsg errMsg={errMsg} />}
      {success && <InlineSuccessMsg successMsg={success} />}
    </div>
  );
};
