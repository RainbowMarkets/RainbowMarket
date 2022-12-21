import { Form, StartButton } from "./styledSetProfileInput";
import SetprofileHeader from "./SetProfileHeader/SetprofileHeader";
import SetProfileImage from "./SetProfileImage/SetProfileImage";
import SetProfileInput from "./SetProfileInput/SetProfileInput";
import { useRef, useState } from "react";
import useUserContext from "../../../hooks/useUserContext";

export default function SetProfile({ join }) {
  const { user, dispatch } = useUserContext();
  const [username, setUsername] = useState("");
  const [accountname, setAccountname] = useState("");
  const [intro, setIntro] = useState("");
  const uploadInp = useRef(null);

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const accountnameHandler = (event) => {
    setAccountname(event.target.value);
  };

  const introHandler = (event) => {
    setIntro(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
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
            Authorization: `Bearer ${user.token}`,
            "Content-type": "application/json",
          },
          body: JSON.stringify(body),
        })
          .then((response) => response.json())
          .then((res) => {
            console.log(res);
            dispatch({ type: "LOGIN", payload: res.user });
            localStorage.setItem("aName", user.accountname);
            localStorage.setItem("uName", user.username);
            localStorage.setItem("image", user.image);
            localStorage.setItem("token", user.token);
          });
      });
  };

  return (
    <Form>
      {join ? <SetprofileHeader /> : null}
      <SetProfileImage uploadInp={uploadInp} />
      <SetProfileInput
        id="username"
        label="사용자 이름"
        placeholder="2~10자 이내여야 합니다."
        value={username}
        handler={usernameHandler}
      />
      <SetProfileInput
        id="accountname"
        label="계정 ID"
        placeholder="영문, 숫자, 특수문자(.), (...)만 사용 가능합니다."
        value={accountname}
        handler={accountnameHandler}
      />
      <SetProfileInput
        id="intro"
        label="소개"
        placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
        value={intro}
        handler={introHandler}
      />
      <StartButton onClick={submitHandler}>감귤마켓 시작하기</StartButton>
    </Form>
  );
}
