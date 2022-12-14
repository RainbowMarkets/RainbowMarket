import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileFooter from "./ProfileFooter/ProfileFooter";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

const Section = styled.section`
  width: 100%;
  padding: 30px 24px;
  background: white;
  text-align: center;

  strong {
    display: block;
    font-size: 16px;
    font-weight: 700;
    margin: 10px 0;
  }

  small {
    display: block;
    color: #767676;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    margin: 10px 0;
  }

  p {
    display: block;
    line-height: 17.53px;
    font-weight: 400;
    margin: 10px 0;
  }
`;

export default function ProfileSection() {
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
  });

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTZjYjUyMTdhZTY2NjU4MWMzMzQ0MyIsImV4cCI6MTY3NjE2MTYwNCwiaWF0IjoxNjcwOTc3NjA0fQ.zm-yhyy5g9foTWFFkVOO3-kTJHR45GWJCKBBf7sl3Dc";

  useEffect(() => {
    fetch("https://mandarin.api.weniv.co.kr/user/myinfo", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setUserInfo(json.user));
  }, []);

  console.log("userinfo", userInfo);
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
