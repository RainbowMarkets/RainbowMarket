import styled from "styled-components";
import xImg from "../../assets/images/x.png";
import uploadFile from "../../assets/images/upload-file.png";

export const UploadContain = styled.div`
  padding: 20px 16px 16px 16px;
  height: 100vh;
  box-sizing: border-box;
`;
export const UploadWrapper = styled.section`
  display: flex;
  height: 100%;
  justify-content: center;
  /* background-color: white; */
  background-color: black;
`;
export const ProfileContain = styled.section`
  img {
    width: 42px;
    height: 42px;
    margin-right: 12px;
  }
`;
export const TextWrapper = styled.section`
  margin-top: 12px;
  position: relative;
  .form-textarea {
    width: 304px;
    font-weight: 400;
    line-height: 17.53px;
    border: none;
    resize: none;
    height: 50px;
    margin-bottom: 16px;
  }
  .img-up-btn {
    background-image: url(${uploadFile});
    background-size: cover;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
`;
export const PostImgWrapper = styled.section`
  ul {
    display: flex;
    gap: 8px;
  }
  li {
    position: relative;
  }
  img {
    width: 304px;
    height: 228px;
    border-radius: 10px;
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
