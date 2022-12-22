import { Anchor } from "./styledFollow";

export default function Follow({ follow, count, data }) {
  return (
    <Anchor
      to={`/profile/${data.accountname}/${follow.slice(0, follow.length - 1)}`}
    >
      <strong>{count}</strong>
      <small>{follow}</small>
    </Anchor>
  );
}
