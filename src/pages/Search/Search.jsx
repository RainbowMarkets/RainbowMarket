import { useEffect, useState } from "react";
import UserList from '../../components/common/UserList/UserList'
import SearchTopBar from '../../components/TopBar/SearchTopBar/SearchTopBar'
import useUserContext from "../../hooks/useUserContext";
import { StyledSection, StyledUl } from './styledSearch'

export default function Search() {
  const { user } = useUserContext();
  const [searchInp, setSearchInp] = useState("");
  const [userData, setUserData] = useState([]);

  const url = "https://mandarin.api.weniv.co.kr";
  const reqPath = `/user/searchuser/?keyword=${searchInp}`;
  
  useEffect(() => {
    if (!user.token) return;
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
          // console.log("searchtest!!", res);
          setUserData(res || []);
        });
    }
    fetchUserData();
  }, [searchInp]);

  return (
    <>
      <SearchTopBar
        searchInp={searchInp}
        setSearchInp={setSearchInp}
        />
      <StyledSection>
        <StyledUl>
          {
            userData.map((userDataitem) => {
              return(
                <UserList
                  key={Math.random()}
                  image={userDataitem.image}
                  username={userDataitem.username}
                  accountname ={userDataitem.accountname}
                  searchInp={searchInp}/>
              )
            })
          }
        </StyledUl>
      </StyledSection>
    </>
  )
}
