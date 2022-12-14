import styled from "styled-components";

export const PostWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 358px;
  margin-bottom: 20px;
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
  p {
    font-weight: 500;
    line-height: 17.53px;
    margin-bottom: 2px;
  }
  small {
    font-weight: 400;
    line-height: 14px;
    font-size: 12px;
    color: #767676;
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
    color: rgba(118, 118, 118, 1);
    font-weight: 400;
    line-height: 12px;
    font-size: 10px;
  }
`;
export const PostBtn = styled.div`
  display: flex;
  margin-bottom: 16px;
`;
