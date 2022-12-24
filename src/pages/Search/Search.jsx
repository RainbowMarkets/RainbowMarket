import { useEffect, useState } from "react";
import Loading from "../../components/common/Loading/Loading";
import UserList from '../../components/common/UserList/UserList'
import Splash from "../../components/Splash/Splash";
import SearchTopBar from '../../components/TopBar/SearchTopBar/SearchTopBar'
import useUserContext from "../../hooks/useUserContext";
import { StyledSection, StyledUl } from "./styledSearch";


export default function Search() {
  const { user } = useUserContext();
  const [searchInp, setSearchInp] = useState(null);
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // 로딩표시

  const url = "https://mandarin.api.weniv.co.kr";
  const reqPath = `/user/searchuser/?keyword=${searchInp}`;
  
  useEffect(() => {
    if (!user.token) return;
    setIsLoading(true);
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
        setIsLoading(false);
      })
      .then(searchInp === "" ? setSearchInp(null) : setSearchInp(searchInp))
    }
    fetchUserData();
  }, [searchInp]);

  return (
    <>
      <SearchTopBar
        searchInp={searchInp}
        setSearchInp={setSearchInp}
        />

        {isLoading ? (
          <Loading />  
        ) : (
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
        )}
    </>
  )
}
