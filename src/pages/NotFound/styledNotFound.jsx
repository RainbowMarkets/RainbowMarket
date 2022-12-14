import styled from "styled-components";
import { colors } from "../../GlobalStyle";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

export const StyledImg = styled.img`
	width: 160px;
`;

export const StyledStrong = styled.strong`
  font-size: 36px;

  font-weight: bold;
  margin-top: 10px;
`
export const StyledP = styled.p`
  margin: 20px 0;
  line-height: 14px;
`

export const StyledButton = styled.button`
  background-color: ${colors.colorMain};
  color: #fff;
  padding: 13px 26px;
  border-radius: 44px;
  font-weight: 500;
`