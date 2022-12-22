import { useEffect, useState } from "react";
import UserList from '../../components/common/UserList/UserList'
import SearchTopBar from '../../components/TopBar/SearchTopBar/SearchTopBar'
import useUserContext from "../../hooks/useUserContext";
import { StyledSection, StyledUl } from './styledSearch'

export default function Search() {
  const { user } = useUserContext();
  const url = "https://mandarin.api.weniv.co.kr";
  const reqPath = `/user/searchuser/?keyword=dada`;

  const [userData, setUserData] = useState([]);

  const fetchUserData = async () => {
    await fetch(url + reqPath, {
      method: "GET",
      headers: {
        Authorization : `Bearer ${user.token}`,
        "Content-type" : "application/json"
      }
    })
    .then((res) => res.json())
        .then((res) => {
          console.log("searchtest!!", res);
          setUserData(res || []);
        });
  }
  useEffect(() => {
    if (!user.token) return;
    fetchUserData();
  }, []);

  return (
    <>
      <SearchTopBar />
      <StyledSection>
        <StyledUl>
          {
            userData.map((userDataitem) => {
              return(
                <UserList 
                  image={userDataitem.image}
                  username={userDataitem.username}
                  accountname ={userDataitem.accountname}/>
              )
            })
          }
        </StyledUl>
      </StyledSection>
    </>
  )
}
