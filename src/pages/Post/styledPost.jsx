import styled from "styled-components";
import xImg from "../../assets/images/x.png";
import uploadFile from "../../assets/images/upload-file.png";
import { colors, fonts } from "../../GlobalStyle";

export const UploadContain = styled.div`
  // position: absolute;
  padding: 20px 16px 16px 16px;
  width: 100%;
  height: calc(100% - 48px);
  box-sizing: border-box;
`;
export const UploadWrapper = styled.section`
  display: flex;
  height: 100%;
  justify-content: space-between;
  background-color: white;
`;
export const ProfileContain = styled.section`
  img {
    width: 42px;
    height: 42px;
    margin-right: 12px;
    border-radius: 50%;
  }
`;
export const TextWrapper = styled.section`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  width: calc(100% - 86px);
  justify-content: space-between;
  height: 100%;
  // overflow-y: auto;
  form {
    width: 100%;
  }

  .form-textarea {
    width: 100%;
    height: 100%;
    font-weight: 400;
    line-height: 17.53px;
    border: none;
    resize: none;
    margin-bottom: 16px;
    outline: none;

    font-size: ${fonts.main};
    font-family: "Spoqa Han Sans Neo", "sans-serif";
  }
  .form-textarea::placeholder {
    color: ${colors.colorC4};
    font-size: ${fonts.main};
    font-family: "Spoqa Han Sans Neo", "sans-serif";
  }

  .label-wrap {
    position: sticky;
    bottom: 20px;
    right: 0;
  }

  .img-up-btn {
    display: block;
    background-image: url(${uploadFile});
    background-size: cover;
    width: 50px;
    height: 50px;
    cursor: pointer;
    margin-left: auto;
  }
`;
export const PostImgWrapper = styled.section`
  ul {
    display: flex;
    max-width: calc(440px - 70px);
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    gap: 8px;
  }
  li {
    display: inline-block;
    position: relative;
    width: 304px;
    height: 228px;
    max-width: 304px;
    max-height: 228px;
    min-width: 168px;
    min-height: 126px;
  }
  img {
    width: 304px;
    height: 228px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-size: cover;
    object-fit: cover;
  }
  .postImg-del {
    position: absolute;
    background-image: url(${xImg});
    background-size: contain;
    width: 22px;
    height: 22px;
    right: 6px;
    top: 6px;
  }
`;
