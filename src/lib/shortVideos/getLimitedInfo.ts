import { GetShortVidsRes } from "../../typesAndInterfaces/shortVideos/getLimitedInfo";

async function getShortVideosFn({
  setErrMsg,
}: {
  setErrMsg: React.Dispatch<React.SetStateAction<string>>;
}): Promise<GetShortVidsRes | undefined> {
  const url = "http://localhost:4192/api/v1/shortVideos";

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
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

  const data: GetShortVidsRes = await res.json();

  return data;
}

export default getShortVideosFn;
