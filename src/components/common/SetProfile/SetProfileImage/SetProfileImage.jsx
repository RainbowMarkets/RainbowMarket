import React from "react";
import styled from "styled-components";
import uploadimg from "../../../../assets/images/icon-image.png";
import { colors } from "../../../../GlobalStyle";

const Wrapper = styled.div`
  width: min-content;
  position: relative;
  margin: auto;
`;

const ProfileImage = styled.img`
  width: 110px;
  height: 110px;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  object-fit: cover;
`;

const UploadButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  position: absolute;
  background: ${colors.colorMain}};
  right: 0;
  bottom: 2px;

  img {
    display: block;
    width: 20px;
    height: 20px;
    margin: auto;
  }
`;

export default function SetProfileImage() {
  return (
    <Wrapper>
      <ProfileImage src="https://cdn.pixabay.com/photo/2022/10/19/01/02/woman-7531315_960_720.png" />
      <UploadButton>
        <img src={uploadimg} />
      </UploadButton>
    </Wrapper>
  );
}
