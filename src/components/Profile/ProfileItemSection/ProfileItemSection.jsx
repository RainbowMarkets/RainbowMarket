import ProfileItemList from "./ProfileItemList/ProfileItemList";
import { Section } from "./styledProfileItemSection";

export default function ItemListSection({
  name,
  isMine,
  prodModal,
  setProdModal,
  setProduct,
}) {
  return (
    <Section>
      <h2>판매 중인 상품</h2>
      <ProfileItemList
        name={name}
        isMine={isMine}
        prodModal={prodModal}
        setProdModal={setProdModal}
        setProduct={setProduct}
      />
    </Section>
  );
}
