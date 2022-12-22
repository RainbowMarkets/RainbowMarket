import { useRef, useState } from "react";
import SetProfile from "../../components/common/SetProfile/SetProfile";
import SaveTopBar from "../../components/TopBar/SaveTopBar/SaveTopBar";
import useUserContext from "../../hooks/useUserContext";

export default function ProfileEdit() {
  const { user, dispatch } = useUserContext();
  const [username, setUsername] = useState("");
  const [accountname, setAccountname] = useState("");
  const [intro, setIntro] = useState("");
  const [isPending, setIsPending] = useState(false);
  const uploadInp = useRef(null);
  const token = localStorage.getItem("token");

  const submitHandler = (event) => {
    event.preventDefault();
    setIsPending(true);
    // console.log(username, accountname, intro, uploadInp.current.files[0]);

    const test = new FormData();
    test.append("image", uploadInp.current.files[0]);

    for (let k of test.keys()) {
      console.log(k);
    }
    for (let v of test.values()) {
      console.log(v);
    }

    fetch("https://mandarin.api.weniv.co.kr/image/uploadfile", {
      method: "POST",
      body: test,
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("응답 : ", res);

        const body = {
          user: {
            username: username,
            accountname: accountname,
            intro: intro,
            image: `https://mandarin.api.weniv.co.kr/${res.filename}`,
          },
        };

        fetch("https://mandarin.api.weniv.co.kr/user", {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
          body: JSON.stringify(body),
        })
          .then((response) => response.json())
          .then((res) => {
            console.log(res);
            dispatch({ type: "LOGIN", payload: res.user });
            localStorage.setItem("aName", res.user.accountname);
            localStorage.setItem("uName", res.user.username);
            localStorage.setItem("image", res.user.image);
          })
          .then(() => window.location.assign("/profile"));
      })
      .catch((err) => {
        alert(err);
        setIsPending(false);
      });
  };

  return (
    <>
      <SaveTopBar handler={submitHandler} isPending={isPending} />
      <SetProfile
        join={false}
        username={username}
        accountname={accountname}
        intro={intro}
        uploadInp={uploadInp}
        setUsername={setUsername}
        setAccountname={setAccountname}
        setIntro={setIntro}
      />
    </>
  );
}
