import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, fonts } from "../../GlobalStyle";
export const ChatWrapper = styled.section`
  padding: 24px 16px 16px 16px;
  width: 100%;
  height: calc(100vh - 108px);
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  margin-bottom: 20px;
  img {
    width: 42px;
    height: 42px;
    margin-right: 12px;
  }
  .contentDiv {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    strong {
      font-weight: 400;
      line-height: 17.53px;
      margin-bottom: 4px;
    }
    .content {
      font-weight: 400;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      line-height: 15.02px;
      font-size: ${fonts.mid};
      color: ${colors.color76};
    }
    .content-ellipsis {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
    }
    .chat-date {
      font-weight: 400;
      line-height: 12.52px;
      font-size: ${fonts.small};
      color: ${colors.colorDB};
    }
  }
`;
