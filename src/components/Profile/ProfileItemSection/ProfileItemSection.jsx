import ProfileItemList from "./ProfileItemList/ProfileItemList";
import { Section } from "./styledProfileItemSection";

export default function ItemListSection() {
  return (
    <Section>
      <h2>판매 중인 상품</h2>
      <ProfileItemList />
    </Section>
  );
}
