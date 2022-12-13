import React from "react";
import styled from "styled-components";
import uploadimg from "../../../../assets/images/icon-image.png";

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
`;

const UploadButton = styled.button`
  width: 36px;
  height: 36px;
  background: #8d72e1;
  border-radius: 50%;

  img {
    display: block;
    width: 18px;
    height: 18px;
    margin: auto;
  }
`;

export default function SetProfileImage() {
  return (
    <>
      <ProfileImage src="https://cdn.pixabay.com/photo/2022/10/19/01/02/woman-7531315_960_720.png" />
      <UploadButton>
        <img src={uploadimg} />
      </UploadButton>
    </>
  );
}
