import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useUserContext from "../../../hooks/useUserContext";
import ProfileFooter from "./ProfileFooter/ProfileFooter";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import { Section } from "./styledProfileSection";

export default function ProfileSection() {
  const { user } = useUserContext();
  // console.log(user);

  return (
    <Section>
      <ProfileHeader />
      <strong>{user.username || "누구일까"}</strong>
      <small>@{user.accountname || "누구일까"}</small>
      <p>{user.intro || ""}</p>
      <ProfileFooter />
    </Section>
  );
}
