import { ResStoryLimitedInfo } from "../../typesAndInterfaces/stories/resLimitedInfo";

async function getStoriesFn({
  setErrMsg,
}: {
  setErrMsg: React.Dispatch<React.SetStateAction<string>>;
}): Promise<ResStoryLimitedInfo | undefined> {
  const url = "http://localhost:4192/api/v1/story/getLimitedInfo";

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

  const data: ResStoryLimitedInfo = await res.json();

  return data;
}

export default getStoriesFn;
