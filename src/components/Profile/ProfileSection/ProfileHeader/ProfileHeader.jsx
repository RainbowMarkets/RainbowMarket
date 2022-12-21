import Follow from "../ProfileFollow/ProfileFollow";
import ProfileBasic from "../../../../assets/images/profile_big.png";
import { Header } from "./styledProfileHeader";
import useUserContext from "../../../../hooks/useUserContext";

export default function ProfileHeader() {
  const { user } = useUserContext();
  return (
    <Header>
      <Follow follow={user.followerCount || 0} tofrom="followers" />
      <img src={user.image || ProfileBasic} alt="" />
      <Follow follow={user.followingCount || 0} tofrom="followings" />
    </Header>
  );
}
