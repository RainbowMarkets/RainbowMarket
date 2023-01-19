import basicImage from "../assets/images/img-error.png";

export default function useHandler() {
  const handleImgError = (e) => {
    e.target.src = basicImage;
  };

  return { handleImgError };
}
