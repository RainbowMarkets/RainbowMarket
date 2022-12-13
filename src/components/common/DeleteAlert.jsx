import styled from "styled-components";

const DeleteAlertWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  div {
    background-color: #ffffff;
    width: 252px;
    height: 110px;
    border-radius: 10px;
    text-align: center;
  }
  strong {
    display: inline-block;
    font-weight: 500;
    font-size: 16px;
    line-height: 20.03px;
    padding: 22px 0 22px;
  }
  ul {
    border-top: 0.5px solid #dbdbdb;
    display: flex;
  }
  li {
    width: 126px;
    height: 46px;
  }
  li:first-child {
    border-right: 0.5px solid #dbdbdb;
  }
  button {
    width: 100%;
    height: 100%;
    font-weight: 400;
    line-height: 17.53px;
  }
  .alert-del {
    color: red;
  }
`;

const DeleteAlert = () => {
  return (
    <>
      <DeleteAlertWrapper>
        <h3 className="hidden">경고 알림 창</h3>
        <div>
          <strong>게시글을 삭제할까요?</strong>
          <ul>
            <li>
              <button>취소</button>
            </li>
            <li>
              <button className="alert-del">삭제</button>
            </li>
          </ul>
        </div>
      </DeleteAlertWrapper>
    </>
  );
};
export default DeleteAlert;
