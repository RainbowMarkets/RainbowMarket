import { useState } from "react";
import { Wrapper, ProfileImage, UploadButton } from "./styledSetProfileImage";
import uploadimg from "../../../../assets/images/icon-image.png";
import useUserContext from "../../../../hooks/useUserContext";
import basicImg from "../../../../assets/images/profile_big.png";

export default function SetProfileImage({ uploadInp }) {
  const { user } = useUserContext();
  const [preview, setPreview] = useState(user ? user.image : null);

  const uploadHandler = (event) => {
    if (!event.target.files[0]) setPreview(null);
    else {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      return new Promise((resolve) => {
        reader.onload = () => {
          setPreview(reader.result);
          resolve();
        };
      });
    }
  };

  return (
    <Wrapper>
      <ProfileImage src={preview || user?.image || basicImg} />
      <UploadButton type="button">
        <label htmlFor="upload">
          <img src={uploadimg} />
        </label>
        <input
          ref={uploadInp}
          id="upload"
          type="file"
          accept="image/*"
          onChange={uploadHandler}
        />
      </UploadButton>
    </Wrapper>
  );
}
