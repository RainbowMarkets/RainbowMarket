import { Link } from "react-router-dom";
import styled from "styled-components";
import messageIcon from "../../../../assets/images/icon-message-circle.png";
import shareIcon from "../../../../assets/images/icon-share.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const ProfileModifyButton = styled(Link)`
  color: #767676;
  width: 120px;
  height: 34px;
  border-radius: 30px;
  border: 1px solid #dbdbdb;
  text-decoration: none;
  padding: 8px 0;
`;

const RegisterItem = styled(ProfileModifyButton)`
  width: 100px;
`;

const FollowButton = styled(ProfileModifyButton)`
  color: white;
  line-height: 18px;
  background: #8d72e1;
  border: none;
`;

const UnFollowButton = styled(ProfileModifyButton)`
  background: white;
`;

const CircleButton = styled.button`
  width: 34px;
  height: 34px;
  border: 1px solid #dbdbdb;
  border-radius: 30px;

  img {
    display: block;
    width: 20px;
    object-fit: cover;
    margin: auto;
  }
`;

export {
  Wrapper,
  ProfileModifyButton,
  RegisterItem,
  FollowButton,
  UnFollowButton,
  CircleButton,
};
