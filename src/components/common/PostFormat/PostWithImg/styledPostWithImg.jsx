import styled from "styled-components";
import { colors, fonts } from "../../../../GlobalStyle";

export const PostWrapper = styled.section`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
`;
export const ProfileContain = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  .profile-img {
    width: 42px;
    height: 42px;
    margin-right: 12px;
  }
  .post-modal {
    width: 18px;
    height: 18px;
  }
`;
export const ProfileName = styled.div`
  flex-grow: 2;
  margin-top: 4px;
  p {
    font-weight: bold;
    line-height: 17.53px;
    margin-bottom: 2px;
  }
  small {
    font-weight: 400;
    line-height: 14px;
    font-size: ${fonts.mid};
    color: ${colors.color76};
  }
`;
export const ContextWrapper = styled.div`
  margin-left: 54px;

  .post-context {
    font-weight: 400;
    line-height: 17.53px;
    margin-bottom: 16px;
  }
  .post-date {
    color: ${colors.color76};
    font-weight: 400;
    line-height: 12px;
    font-size: ${fonts.small};
  }
  .post-img {
    width: 100%;
    height: auto;
    background-size: contain;
    border-radius: 10px;
    margin-bottom: 12px;
  }
`;
export const PostBtn = styled.div`
  display: flex;
  margin-bottom: 16px;
`;
