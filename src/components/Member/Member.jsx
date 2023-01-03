import { useEffect, useState } from "react";
import { StyledUl } from "./styledMember";

export default function Member() {
  const [memberList, setMemberList] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/RainbowMarkets/RainbowMarket/develop/src/components/Member/Memberdata.json"
    )
      .then((res) => res.json())
      .then((res) => setMemberList(res));
  }, []);

  return (
    <>
      <StyledUl>
        {memberList.map((member) => {
          return (
            <li key={member.id}>
              <div>
                <img src={member.img} alt={member.name} />
                <strong>{member.name}</strong>
                <p>Front-end Developer</p>
              </div>
              <div className="links">
                <a href={member.resume} target="_blank">
                  Resume
                </a>
                <a href={member.github} target="_blank">
                  GitHub
                </a>
              </div>
            </li>
          );
        })}
      </StyledUl>
    </>
  );
}
