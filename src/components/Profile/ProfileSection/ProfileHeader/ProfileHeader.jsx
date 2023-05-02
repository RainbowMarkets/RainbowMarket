import Follow from "../ProfileFollow/ProfileFollow";
import ProfileBasic from "../../../../assets/images/profile_big.png";
import { Header } from "./styledProfileHeader";

export default function ProfileHeader({ data }) {
  return (
    <Header>
      <Follow
        follow="followers"
        count={data.followerCount}
        name={data.accountname}
      />
      <img
        src={
          data.image.includes("https://api.mandarin.weniv.co.kr")
            ? data.image === "https://api.mandarin.weniv.co.kr/Ellipse.png"
              ? ProfileBasic
              : data.image
            : ProfileBasic
        }
        alt=""
      />
      <Follow
        follow="followings"
        count={data.followingCount}
        name={data.accountname}
      />
    </Header>
  );
}
