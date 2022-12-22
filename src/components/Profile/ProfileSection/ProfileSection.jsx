import { useEffect, useState } from "react";
import ProfileFooter from "./ProfileFooter/ProfileFooter";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import { Section } from "./styledProfileSection";

export default function ProfileSection({ data, isMine, setUserProfile }) {
  return (
    <>
      <Section>
        <ProfileHeader data={data} />
        <strong>{data.username || "누구일까"}</strong>
        <small>@{data.accountname || "누구일까"}</small>
        <p>{data.intro || ""}</p>
        <ProfileFooter
          isMine={isMine}
          setUserProfile={setUserProfile}
          data={data}
        />
      </Section>
    </>
  );
}
