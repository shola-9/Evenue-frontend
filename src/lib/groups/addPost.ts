import Cookies from "js-cookie";
import { Res4AddPost } from "../../typesAndInterfaces/groups.ts/res4AddPost";

async function addPostFn({
  formDataBody,
  setErrMsg,
}: {
  formDataBody: FormData;

  setErrMsg: React.Dispatch<React.SetStateAction<string>>;
}): Promise<Res4AddPost | undefined> {
  const url = `http://localhost:4192/api/v1/groups/addPost`;

  const token = Cookies.get("token");

  const res = await fetch(url, {
    method: "POST",
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

  const data: Res4AddPost = await res.json();

  return data;
}

export default addPostFn;
