import { useState } from "react";
import IsHaveFeed from "./IsHaveFeed/IsHaveFeed"
import NoFeed from "./NoFeed/NoFeed"
export default function Home() {
  const [isHaveFeed, setIsHaveFeed] = useState(false);

  return (
    <>
      {
        isHaveFeed ? <IsHaveFeed /> : <NoFeed/>
      }
    </>
  )
}
