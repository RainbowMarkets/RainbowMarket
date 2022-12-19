import ProfileItemSection from "../../components/Profile/ProfileItemSection/ProfileItemSection";
import ProfileFeedSection from "../../components/Profile/ProfileFeedSection/ProfileFeedSection";
import ProfileSection from "../../components/Profile/ProfileSection/ProfileSection";
import CommonTopBar from "../../components/TopBar/CommonTopBar/CommonTopBar";
import useUserContext from "../../hooks/useUserContext";
import { Wrapper } from "./styledProfile";
import Login from "../../components/common/Login/Login";

export default function Profile() {
  const { user } = useUserContext();

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <>
          <CommonTopBar />
          <Wrapper>
            {/* 팔로우 등 프로필이 표시되는 섹션 */}
            <ProfileSection />
            {/* 판매 중잉 아이템이 표시되는 섹션 */}
            <ProfileItemSection />
            {/* 쓴 글 목록이 표시되는 섹션 */}
            <ProfileFeedSection />
          </Wrapper>
        </>
      )}
    </>
  );
}
