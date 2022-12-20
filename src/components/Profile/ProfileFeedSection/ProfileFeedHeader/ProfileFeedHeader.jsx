import { Header, ListByText, ListByImg } from "./styledProfileFeedHeader";

export default function ProfileFeedHeader({ setWithImg }) {
  return (
    <Header>
      <ListByText onClick={() => setWithImg(false)} />
      <ListByImg onClick={() => setWithImg(true)} />
    </Header>
  );
}
