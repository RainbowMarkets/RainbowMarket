import {
  Wrapper,
  ProfileModifyButton,
  RegisterItem,
} from "./styledProfileFooter";

export default function ProfileFooter() {
  return (
    <Wrapper>
      {/* <CircleButton>
        <img src={messageIcon} />
      </CircleButton>
      <FollowButton>팔로우</FollowButton>
      <CircleButton>
        <img src={shareIcon} />
      </CircleButton> */}
      <ProfileModifyButton to="/profile/edit">프로필 수정</ProfileModifyButton>
      <RegisterItem to="/product">상품 등록</RegisterItem>
    </Wrapper>
  );
}
