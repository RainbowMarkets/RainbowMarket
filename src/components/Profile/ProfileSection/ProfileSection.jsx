import ProfileFooter from "./ProfileFooter/ProfileFooter";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import { Section } from "./styledProfileSection";

export default function ProfileSection({ data, isMine, setUserProfile }) {
  return (
    <>
      <Section random={Math.random()}>
        <ProfileHeader data={data} />
        <strong>{data.username || "익명의 재능러"}</strong>
        <small>@{data.accountname || "익명의 재능러"}</small>
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
