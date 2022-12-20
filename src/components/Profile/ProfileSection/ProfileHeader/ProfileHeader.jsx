import React from "react";
import Follow from "../ProfileFollow/ProfileFollow";
import ProfileBasic from "../../../../assets/images/profile_big.png";
import { useNavigate } from "react-router-dom";
import { Header } from "./styledProfileHeader";

export default function ProfileHeader({ userInfo }) {
  return (
    <Header>
      <Follow follow={userInfo.followerCount || 0} tofrom="followers" />
      <img src={userInfo.image || ProfileBasic} alt="" />
      <Follow follow={userInfo.followingCount || 0} tofrom="followings" />
    </Header>
  );
}
