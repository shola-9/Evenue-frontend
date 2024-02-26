import Cookies from "js-cookie";
async function logOutFn({
  setErrMsg,
}: {
  setErrMsg: React.Dispatch<React.SetStateAction<string>>;
}) {
  const url = "http://localhost:4192/api/v1/users/logout";

  const token = Cookies.get("token");

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
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

  const data = await res.json();
  console.log({ data });

  // Clear the cookies
  Cookies.remove("token", {
    path: "/",
    secure: true,
    sameSite: "strict",
    expires: 0,
  });

  return data;
}

export default logOutFn;
