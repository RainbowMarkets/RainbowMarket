import { useRef, useState } from "react";
import imageCompression from "browser-image-compression";
import useFetch from "./useFetch";

export default function useImageHandler() {
  const { uploadImage } = useFetch();
  const [preview, setPreview] = useState(null); // 이미지 미리보기 관리

  const imageRef = useRef(null); // 파일 Input DOM을 선택하기 위한 useRef

  const previewHandler = (event) => {
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

  const imageUploadHandler = async (file) => {
    const options = {
      maxSizeMB: 0.08, // 압축 시 최대 크기
      maxwidthOrHeight: 440, // 압축 시 너비와 높이 최대값
    };

    if (file) {
      return imageCompression(file, options).then((compressedFile) => {
        const newFile = new File([compressedFile], file.name, {
          type: file.type,
        });

        const formData = new FormData(); // form-data 생성
        formData.append("image", newFile); // 파일 추가

        return uploadImage(formData);
      });
    } else return;
  };

  return { preview, previewHandler, imageRef, imageUploadHandler };
}
