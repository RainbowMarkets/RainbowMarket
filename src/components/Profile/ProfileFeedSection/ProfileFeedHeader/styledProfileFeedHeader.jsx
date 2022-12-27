import styled from "styled-components";
import postListOn from "../../../../assets/images/icon-post-list-on.png";
import postListOff from "../../../../assets/images/icon-post-list-off.png";
import postAlbumOn from "../../../../assets/images/icon-post-album-on.png";
import postAlbumOff from "../../../../assets/images/icon-post-album-off.png";

const Header = styled.div`
  height: 44px;
  display: flex;
  width: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  padding: 9px 16px;
  border-bottom: 0.5px solid #dbdbdb;
`;

const ListByText = styled.button`
  width: 26px;
  height: 26px;
  background-image: url(${(props) =>
    props.onlyImg ? postListOff : postListOn});
  background-repeat: none;
  background-size: cover;
`;
const ListByImg = styled(ListByText)`
  background-image: url(${(props) =>
    props.onlyImg ? postAlbumOn : postAlbumOff});
`;

export { Header, ListByText, ListByImg };
