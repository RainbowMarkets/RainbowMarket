import styled from "styled-components";

const palette = [
  { bg: "#FBFACD", ft: "#767676" },
  { bg: "#BEE9DE", ft: "#767676" },
  { bg: "#FAAB78", ft: "#FFF" },
  { bg: "#c1becb", ft: "#FFF" },
  { bg: "#F5EDCE", ft: "#767676" },
  { bg: "#DAD2E9", ft: "#767676" },
  { bg: "#FAD6D2", ft: "#767676" },
  { bg: "#a0d3ff", ft: "#EEE" },
  { bg: "#FF8C94", ft: "#FFF" },
];

const Section = styled.section`
  width: 100%;
  padding: 30px 24px;
  background: ${(props) =>
    palette[Math.floor(props.random * palette.length)].bg};
  text-align: center;

  strong {
    display: block;
    font-size: 16px;
    font-weight: 700;
    margin: 10px 0;
  }

  small {
    display: block;
    color: ${(props) => palette[Math.floor(props.random * palette.length)].ft};
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    margin: 10px 0;
  }

  p {
    display: block;
    line-height: 17.53px;
    font-weight: 400;
    margin: 10px 0;
  }
`;

export { Section };
