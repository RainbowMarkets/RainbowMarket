import { Header, ListByText, ListByImg } from "./styledProfileFeedHeader";

export default function ProfileFeedHeader({ setOnlyImg, onlyImg }) {
  return (
    <Header>
      <ListByText onClick={() => setOnlyImg(false)} onlyImg={onlyImg} />
      <ListByImg onClick={() => setOnlyImg(true)} onlyImg={onlyImg} />
    </Header>
  );
}
