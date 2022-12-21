import useUserContext from "../../../../hooks/useUserContext";
import { Anchor } from "./styledFollow";

export default function Followers({ follow }) {
  const { user } = useUserContext();

  return (
    <Anchor
      to={`/profile/${user.accountname}/${follow.slice(0, follow.length - 1)}`}
    >
      <strong>
        {follow === "followers" ? user.followerCount : user.followingCount}
      </strong>
      <small>{follow}</small>
    </Anchor>
  );
}
