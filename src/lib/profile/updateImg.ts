import Cookies from "js-cookie";

async function updateProfileImgFn({
  formDataBody,
  setErrMsg,
}: {
  formDataBody: FormData;
  setErrMsg: React.Dispatch<React.SetStateAction<string>>;
}) {
  const url = "http://localhost:4192/api/v1/users/updateImg";

  const token = Cookies.get("token");

  const res = await fetch(url, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formDataBody,
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

  return data;
}

export default updateProfileImgFn;
