import React from "react";
import Followers from "../Follows/Followers";
import Followings from "../Follows/Followings";
import styled from "styled-components";

const Nickname = styled.strong`
  font-size: 70px;
  font-weight: 700;
`;

export default function ProfileSection() {
  return (
    <>
      <Followers />
      <img src="" alt="프로필 사진" />
      <Followings />
      <Nickname>닉네임</Nickname>
      <small>@대충아이디</small>
      <p>프로필 설명</p>
      <button>
        <img src="" alt="채팅" />
      </button>
      <button>팔로우</button>
      <button>
        <img src="" alt="공유하기" />
      </button>
    </>
  );
}
