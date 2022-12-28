import JoinWithEmail from "../../components/Join/JoinWithEmail/JoinWithEmail";
import SetProfile from "../../components/common/SetProfile/SetProfile";
import { useRef, useState } from "react";

function Join() {
  const [nextStep, setNextStep] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [username, setUsername] = useState("");
  const [accountname, setAccountname] = useState("");
  const [intro, setIntro] = useState("");
  const [image, setImage] = useState("");

  function setValid() {
    console.log("나임");
  }

  function toNextStep() {
    setNextStep(true);
  }

  return (
    <>
      {nextStep ? (
        <SetProfile
          join={true}
          username={username}
          setUsername={setUsername}
          accountname={accountname}
          setAccountname={setAccountname}
          intro={intro}
          setIntro={setIntro}
          image={image}
          setImage={setImage}
          setValid={setValid}
        />
      ) : (
        <JoinWithEmail
          toNextStep={toNextStep}
          emailRef={emailRef}
          passwordRef={passwordRef}
        />
      )}
    </>
  );
}

export default Join;
