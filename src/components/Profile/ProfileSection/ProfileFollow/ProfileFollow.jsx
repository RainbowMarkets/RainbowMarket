import useUserContext from "../../../../hooks/useUserContext";
import { Anchor } from "./styledFollow";

export default function Followers({ follow, tofrom }) {
  const { user } = useUserContext();

  return (
    <Anchor to={`/profile/${user.accountname}/${tofrom}`}>
      <strong>{follow}</strong>
      <small>{tofrom}</small>
    </Anchor>
  );
}
