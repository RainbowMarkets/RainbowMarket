// import MainTopBar from "../../components/TopBar/MainTopBar/MainTopBar";
// import IsHaveFeed from "./IsHaveFeed/IsHaveFeed"
// import NoFeed from "./NoFeed/NoFeed"

// import { useState } from "react";
// import IsHaveFeed from "./IsHaveFeed/IsHaveFeed";
// import NoFeed from "./NoFeed/NoFeed";
// export default function Home() {
//   const [isHaveFeed, setIsHaveFeed] = useState(false);

//   return <>{isHaveFeed ? <IsHaveFeed /> : <NoFeed />}</>;
// }

import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Button, colors } from "../../GlobalStyle";
import useUserContext from "../../hooks/useUserContext";

const Submit = styled(Button)`
  background: ${colors.colorMain};
`;

export default function Home() {
  return (
    <div>
      <p>HOME</p>
    </div>
  );
}
