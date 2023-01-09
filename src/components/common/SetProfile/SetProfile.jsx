import { Form, StartButton } from "./styledSetProfileInput";
import SetprofileHeader from "./SetProfileHeader/SetprofileHeader";
import SetProfileImage from "./SetProfileImage/SetProfileImage";
import SetProfileInput from "./SetProfileInput/SetProfileInput";
import { useEffect, useState } from "react";
import FollowTopBar from "../../TopBar/FollowTopBar/FollowTopBar";
import useFetch from "../../../hooks/useFetch";

export default function SetProfile({
  join,
  username,
  accountname,
  intro,
  uploadInp,
  setUsername,
  setAccountname,
  setIntro,
  image,
  setImage,
  isPending,
  valid,
  setValid,
  submitHandler,
}) {
  const { postData } = useFetch();
  // validation check 함수 시작
  const [usernameCheck, setUsernameCheck] = useState(!!username);
  const [accountnameCheck, setAccountnameCheck] = useState(!!accountname);

  const [userErrMessage, setUerErrMessage] = useState(
    "* 2자 ~ 10자 이내로 입력해주세요."
  );
  const [accountErrMessage, setAccountErrMessage] = useState(null);

  const usernameHandler = (event) => {
    setUsername(event.target.value);
    // 글자 수 확인
    if (event.target.validity.valid) {
      setUerErrMessage(null);
      setUsernameCheck(true);
    } else {
      setUerErrMessage("* 2자 ~ 10자 이내로 입력해주세요.");
      setUsernameCheck(false);
    }
  };

  const accountnameHandler = (event) => {
    // 특수문자 확인
    const regExp = /[\{\}\[\]\/?,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/g;
    if (event.target.value.search(regExp) !== -1) return;

    setAccountname(event.target.value);

    // 아무 입력값이 없을 시
    if (event.target.value === "") {
      setAccountErrMessage("* 필수 입력사항입니다.");
      setAccountnameCheck(false);
      return;
    }

    const body = {
      user: {
        accountname: event.target.value,
      },
    };

    postData("/user/accountnamevalid", body)
      .then((res) => {
        setAccountErrMessage(res.message);
        setAccountnameCheck(false);

        if (res.message === "사용 가능한 계정ID 입니다.") {
          setAccountErrMessage(res.message);
          setAccountnameCheck(true);
        }
      })
      .then(() => {
        // 삭제키를 꾹 누를 때 통신 시간 때문에 반영 못한 경우
        if (event.target.value === "") {
          setAccountErrMessage("* 필수 입력사항입니다.");
          setAccountnameCheck(false);
        }
      });
  };
  // validation check 함수 종료

  const introHandler = (event) => {
    setIntro(event.target.value);
  };

  useEffect(() => {
    if (usernameCheck && accountnameCheck) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [username, accountname, usernameCheck, accountnameCheck]);

  return (
    <>
      {join && <FollowTopBar />}
      <Form>
        {join ? <SetprofileHeader /> : null}
        <SetProfileImage
          uploadInp={uploadInp}
          image={image}
          setImage={setImage}
        />
        <SetProfileInput
          id="username"
          label="사용자 이름"
          placeholder="2~10자 이내여야 합니다."
          value={username}
          handler={usernameHandler}
          min="2"
          max="10"
        />
        <p>{usernameCheck ? null : userErrMessage}</p>
        <SetProfileInput
          id="accountname"
          label="계정 ID"
          placeholder="영문, 숫자, 특수문자 .(점), _(밑줄)만 사용 가능합니다."
          value={accountname}
          handler={accountnameHandler}
          min="1"
          max="10"
        />
        <p style={{ color: accountnameCheck ? "green" : "red" }}>
          {accountErrMessage}
        </p>
        <SetProfileInput
          id="intro"
          label="소개"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
          value={intro}
          handler={introHandler}
        />
        {join ? (
          <StartButton disabled={!valid && !isPending} onClick={submitHandler}>
            🌈 무지개마켓 시작하기
          </StartButton>
        ) : null}
      </Form>
    </>
  );
}
