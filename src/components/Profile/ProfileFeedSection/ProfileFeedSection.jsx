import React, { useState } from "react";
import ProfileFeedHeader from "./ProfileFeedHeader/ProfileFeedHeader";
import PostOnlyText from "../../common/PostFormat/PostOnlyText/PostOnlyText";
import PostContent from "../../common/PostFormat/PostContent/PostContent";

export default function ProfileFeedSection() {
  const [withImg, setWithImg] = useState(false);

  return (
    <section style={{ width: "100%", background: "white" }}>
      <ProfileFeedHeader setWithImg={setWithImg} />
      {/* <PostOnlyText /> */}
      {/* <PostContent /> */}
      안녕안녕
    </section>
  );
}
