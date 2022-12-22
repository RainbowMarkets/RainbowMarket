import styled from "styled-components";
import { colors } from "../../../../GlobalStyle";

const Wrapper = styled.div`
  width: min-content;
  position: relative;
  margin: 30px auto;
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
  cursor: default;

  img {
    display: block;
    width: 20px;
    height: 20px;
    margin: auto;
    object-fit: cover;
  }

  inp, label {
    cursor: pointer;
  }

  #upload {
    display: none;
  }
`;

export { Wrapper, ProfileImage, UploadButton };
