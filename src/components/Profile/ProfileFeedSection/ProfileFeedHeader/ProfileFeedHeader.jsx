import React from "react";
import styled from "styled-components";
import postListOn from "../../../../assets/images/icon-post-list-on.png";
import postListOff from "../../../../assets/images/icon-post-list-off.png";
import postAlbumOn from "../../../../assets/images/icon-post-album-on.png";
import postAlbumOff from "../../../../assets/images/icon-post-album-off.png";

const Header = styled.div`
  height: 44px;
  display: flex;
  max-width: 390px;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  border: 0.5px solid #dbdbdb;
`;

const ListByText = styled.button`
  width: 26px;
  height: 26px;
  background-image: url(${postListOn});
  background-repeat: none;
  background-size: cover;
`;
const ListByImg = styled(ListByText)`
  background-image: url(${postAlbumOff});
`;

export default function ProfileFeedHeader({ setWithImg }) {
  return (
    <Header>
      <ListByText onClick={() => setWithImg(false)} />
      <ListByImg onClick={() => setWithImg(true)} />
    </Header>
  );
}
