import { Anchor } from "./styledFollow";

export default function Follow({ follow, count, name }) {
  return (
    <Anchor to={`/profile/${name}/${follow.slice(0, follow.length - 1)}`}>
      <strong>{count}</strong>
      <small>{follow}</small>
    </Anchor>
  );
}
