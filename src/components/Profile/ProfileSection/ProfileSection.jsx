import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useUserContext from "../../../hooks/useUserContext";
import ProfileFooter from "./ProfileFooter/ProfileFooter";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import { Section } from "./styledProfileSection";

export default function ProfileSection() {
  const { user } = useUserContext();

  const [userInfo, setUserInfo] = useState({
    _id: "",
    username: "",
    accountname: "",
    intro: "",
    image: "",
    isfollow: false,
    following: [],
    follower: [],
    followerCount: 0,
    followingCount: 0,
    ...user,
  });

  useEffect(() => {
    if (!user) return;
    fetch("https://mandarin.api.weniv.co.kr/user/myinfo", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setUserInfo(json.user));
  }, []);

  return (
    <Section>
      <ProfileHeader userInfo={userInfo} />
      <strong>{userInfo.username}</strong>
      <small>@{userInfo.accountname}</small>
      <p>{userInfo.intro}</p>
      <ProfileFooter />
    </Section>
  );
}
