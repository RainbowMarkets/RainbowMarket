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
          data.image === "https://mandarin.api.weniv.co.kr/Ellipse.png"
            ? ProfileBasic
            : data.image
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
