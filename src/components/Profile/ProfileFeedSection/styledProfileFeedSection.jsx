import styled from "styled-components";

const StyledSection = styled.section`
  padding: 20px 16px;
`;

const OnlyImage = styled.article`
  ol {
    display: grid;
    grid-template-columns: 114px 114px 114px;
    justify-content: center;
    justify-items: center;
    gap: 8px;
  }

  li {
    display: block;
    width: min-content;
    position: relative;
  }

  img {
    width: 114px;
    height: 114px;
    object-fit: cover;
  }

  .layer-icon {
    position: absolute;
    right: 5px;
    top: 5px;
    object-fit: cover;
    width: 20px;
    height: 20px;
  }
`;

export { StyledSection, OnlyImage };
