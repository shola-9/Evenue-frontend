import { Response } from "../../typesAndInterfaces/events/getLimitedInfo";

async function getLimitedInfoFn({
  locationIdentifier,
  topEventsIdentifier,
  blacklistIdentifier,
  setErrMsg,
}: {
  locationIdentifier?: string | undefined;
  topEventsIdentifier?: string | undefined;
  blacklistIdentifier?: string | undefined;
  setErrMsg: React.Dispatch<React.SetStateAction<string>>;
}): Promise<Response> {
  const url = "http://localhost:4192/api/v1/events/getLimitedInfo";

  // body for POST request
  let bodyData;
  if (topEventsIdentifier) {
    bodyData = { topEventsIdentifier };
  } else if (locationIdentifier) {
    bodyData = { locationIdentifier };
  } else if (blacklistIdentifier) {
    bodyData = { blacklistIdentifier };
  } else {
    bodyData = {};
  }

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  });

  if (!res.ok) {
    const exactErrorMsg = await res.json();
    const errorMsgString = JSON.stringify(exactErrorMsg);
    const errorMsg = JSON.parse(errorMsgString).error;
    console.log(errorMsg);

    // Set the error message in the state
    setErrMsg(errorMsg);

    // Throw an error to stop further execution
    throw new Error(
      `Request failed with status ${res.status}, ${exactErrorMsg.error}`
    );
  }

  const data: Response = await res.json();

  return data;
}

export default getLimitedInfoFn;
