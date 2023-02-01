import { useState } from "react";
import { Wrapper, ProfileImage, UploadButton } from "./styledSetProfileImage";
import uploadimg from "../../../../assets/images/icon-image.png";
import useUserContext from "../../../../hooks/useUserContext";
import basicImg from "../../../../assets/images/profile_big.png";
import useImageHandler from "../../../../hooks/useImageHandler";

export default function SetProfileImage({ imageRef }) {
  const { user } = useUserContext();
  const { preview, previewHandler } = useImageHandler();

  return (
    <Wrapper>
      <ProfileImage src={preview || user?.image || basicImg} />
      <UploadButton type="button">
        <label htmlFor="upload">
          <img src={uploadimg} />
        </label>
        <input
          ref={imageRef}
          id="upload"
          type="file"
          accept=".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic"
          onChange={previewHandler}
        />
      </UploadButton>
    </Wrapper>
  );
}
