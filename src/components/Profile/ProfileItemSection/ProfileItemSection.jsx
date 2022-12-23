import ProfileItemList from "./ProfileItemList/ProfileItemList";
import { Section } from "./styledProfileItemSection";

export default function ItemListSection({
  name,
  isMine,
  setIsProduct,
  setModalActive,
  setProduct,
}) {
  return (
    <Section>
      <h2>판매 중인 상품</h2>
      <ProfileItemList
        name={name}
        isMine={isMine}
        setIsProduct={setIsProduct}
        setModalActive={setModalActive}
        setProduct={setProduct}
      />
    </Section>
  );
}
