import { useEffect, useState } from "react";
import useUserContext from "../../../hooks/useUserContext";
import ProfileFooter from "./ProfileFooter/ProfileFooter";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import { Section } from "./styledProfileSection";

export default function ProfileSection() {
  const { user, dispatch } = useUserContext();
  const [isPending, setIsPending] = useState(false);
  // console.log(user);

  useEffect(() => {
    if (!user) return;

    setIsPending(true);

    fetch("https://mandarin.api.weniv.co.kr/user/myinfo", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({ type: "LOGIN", payload: json.user });
        setIsPending(false);
      });
  }, []);

  return (
    <>
      {isPending ? (
        "로딩 중..."
      ) : (
        <Section>
          <ProfileHeader />
          <strong>{user.username || "누구일까"}</strong>
          <small>@{user.accountname || "누구일까"}</small>
          <p>{user.intro || ""}</p>
          <ProfileFooter />
        </Section>
      )}
    </>
  );
}
