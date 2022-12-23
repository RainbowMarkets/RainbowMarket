import { Header, ListByText, ListByImg } from "./styledProfileFeedHeader";

export default function ProfileFeedHeader({ setWithImg, withImg }) {
  return (
    <Header>
      <ListByText onClick={() => setWithImg(false)} withImg={withImg} />
      <ListByImg onClick={() => setWithImg(true)} withImg={withImg} />
    </Header>
  );
}
