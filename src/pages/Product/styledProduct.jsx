import styled from "styled-components";
import { colors, fonts } from "../../GlobalStyle";
import uploadImg from "../../assets/images/img-button.png";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 34px;
`;

const ImageLabel = styled.label`
  font-size: ${fonts.mid};
  margin-right: auto;
`;

const Preview = styled.div`
  background: ${colors.colorDB};
  width: 100%;
  min-height: 204px;
  margin: 18px 0;
  border: 0.5px solid ${colors.colorDB};
  border-radius: 10px;
  position: relative;

  img {
    width: 100%;
    border-radius: 10px;
  }
`;

const UploadLabel = styled.label`
  display: block;
  width: 36px;
  height: 36px;
  background-image: url(${uploadImg});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  right: 12px;
  bottom: 12px;
  cursor: pointer;
`;
export { Section, ImageLabel, Preview, UploadLabel };
