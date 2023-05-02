import Follow from "../ProfileFollow/ProfileFollow";
import ProfileBasic from "../../../../assets/images/profile_big.png";
import { Header } from "./styledProfileHeader";

export default function ProfileHeader({ data }) {

  let image = data.image;
  if (image.includes("mandarin.api")) {
    image = image.replace("mandarin.api", "api.mandarin"); // api 주소 변경으로 유실된 이미지 임시 처리
  }

  return (
    <Header>
      <Follow
        follow="followers"
        count={data.followerCount}
        name={data.accountname}
      />
      <img
        src={
          image?.includes("https://api.mandarin.weniv.co.kr")
            ? image === "https://api.mandarin.weniv.co.kr/Ellipse.png"
              ? ProfileBasic
              : image
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
