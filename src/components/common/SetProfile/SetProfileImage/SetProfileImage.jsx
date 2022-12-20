import { useRef } from "react";
import { Wrapper, ProfileImage, UploadButton } from "./styledSetProfileImage";
import uploadimg from "../../../../assets/images/icon-image.png";

export default function SetProfileImage() {
  const uploadInp = useRef(null);

  const changeHandler = (event) => {
    console.log(uploadInp.current.files);
  };

  return (
    <Wrapper>
      <ProfileImage src="https://cdn.pixabay.com/photo/2022/10/19/01/02/woman-7531315_960_720.png" />
      <UploadButton>
        <label htmlFor="upload">
          <img src={uploadimg} />
        </label>
        <input
          ref={uploadInp}
          id="upload"
          type="file"
          accept="image/*"
          onChange={changeHandler}
        />
      </UploadButton>
    </Wrapper>
  );
}
