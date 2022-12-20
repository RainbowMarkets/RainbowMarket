import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  img {
    width: 110px;
    height: 110px;
    margin: 16px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export { Header };
