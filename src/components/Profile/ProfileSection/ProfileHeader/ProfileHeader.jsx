import Follow from "../ProfileFollow/ProfileFollow";
import ProfileBasic from "../../../../assets/images/profile_big.png";
import { Header } from "./styledProfileHeader";
import useUserContext from "../../../../hooks/useUserContext";

export default function ProfileHeader() {
  const { user } = useUserContext();

  return (
    <Header>
      <Follow follow="followers" />
      <img src={user.image || ProfileBasic} alt="" />
      <Follow follow="followings" />
    </Header>
  );
}
