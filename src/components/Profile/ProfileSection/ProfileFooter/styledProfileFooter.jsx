import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const ProfileModifyButton = styled(Link)`
  background: #fff;
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

const FollowButton = styled.button`
  color: ${(props) => (props.bgcolor ? "#767676" : "white")};
  line-height: 18px;
  background: ${(props) => (props.bgcolor ? "white" : "#8d72e1")};
  border: ${(props) => (props.bgcolor ? "1px solid #dbdbdb" : "none")};
  width: 120px;
  height: 34px;
  border-radius: 30px;
  padding: 8px 0;
  transition: 0.3s;

  &:active {
    scale: 0.95;
  }
`;

const UnFollowButton = styled(ProfileModifyButton)`
  background: white;
`;

const CircleButton = styled.button`
  width: 34px;
  height: 34px;
  border: 1px solid #dbdbdb;
  border-radius: 30px;
  background: white;

  img {
    display: block;
    width: 20px;
    object-fit: cover;
    margin: auto;
  }

  &:active {
    scale: 0.95;
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
