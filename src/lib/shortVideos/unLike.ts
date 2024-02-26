import Cookies from "js-cookie";
import { ResUnLike } from "../../typesAndInterfaces/shortVideos/res4unLike";

async function unLikeFn({
  video_id,
  setErrMsg,
}: {
  video_id: number;

  setErrMsg: React.Dispatch<React.SetStateAction<string>>;
}): Promise<ResUnLike | undefined> {
  const url = `http://localhost:4192/api/v1/shortVideos/unLike`;

  const token = Cookies.get("token");

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      video_id,
    }),
  });

  if (!res.ok) {
    const exactErrorMsg = await res.json();
    const errorMsgString = JSON.stringify(exactErrorMsg);
    const errorMsg = JSON.parse(errorMsgString).error;

    console.log(errorMsg);

    // Set the error message in the state
    setErrMsg(errorMsg);

    // Throw an error to stop further execution
    return;
  }

  const data: ResUnLike = await res.json();

  return data;
}

export default unLikeFn;
