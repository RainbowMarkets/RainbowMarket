import { memberList } from "./Memberdata";
import { StyledUl } from "./styledMember";

export default function Member() {
  return (
    <>
      <StyledUl>
        {
          memberList.map((member) => {
            return (
              <li key={member.id}>
                <div>
                  <img src={member.img} alt={member.name} />
                  <strong>{member.name}</strong>
                  <p>Front-end Developer</p>
                </div>
                <div className="links">
                  <a href={member.resume}>Resume</a>
                  <a href={member.github}>GitHub</a>
                </div>
              </li>
            )
          })
        }

      </StyledUl>
      {/* <div>Member</div>
      <div>Member</div>
      <div>Member</div> */}
    </>
  )
}
