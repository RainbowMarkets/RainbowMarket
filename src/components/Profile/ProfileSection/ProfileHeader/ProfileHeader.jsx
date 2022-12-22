import Follow from "../ProfileFollow/ProfileFollow";
import ProfileBasic from "../../../../assets/images/profile_big.png";
import { Header } from "./styledProfileHeader";
import useUserContext from "../../../../hooks/useUserContext";

export default function ProfileHeader({ data }) {
  const { user } = useUserContext();

  return (
    <Header>
      <Follow follow="followers" count={data.followerCount} data={data} />
      <img src={data.image || ProfileBasic} alt="" />
      <Follow follow="followings" count={data.followingCount} data={data} />
    </Header>
  );
}
