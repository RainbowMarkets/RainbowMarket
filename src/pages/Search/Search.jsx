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
  const [target, setTarget] = useState(null); //감시할 target

  const url = "https://mandarin.api.weniv.co.kr";
  const reqPath = `/user/searchuser/?keyword=dada`; /* ${searchInp} */


  const fetchUserData = async () => {
    try {
      const res = await fetch(url + reqPath, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-type": "application/json"
        }
      });
      const data = await res.json();
      setUserData((userData) => [...userData, ...data]);
      console.log(data)
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, [])

  useEffect(() => {
    let observer;
    if (target) {
      const onIntersect = async ([entry], observer) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          await fetchUserData();
          observer.observe(entry.target);
        }
      };
      observer = new IntersectionObserver(onIntersect, { threshold: 1 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  // useEffect(() => {
  //   if (!user.token) return;
  //   setIsLoading(true);
  //   const fetchUserData = async () => {
  //     await fetch(url + reqPath, {
  //       method: "GET",
  //       headers: {
  //         Authorization : `Bearer ${user.token}`,
  //         "Content-type" : "application/json"
  //       }
  //     })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       // console.log("searchtest!!", res);
  //       setUserData(res || []);
  //       setIsLoading(false);
  //     })
  //     .then(searchInp === "" ? setSearchInp(null) : setSearchInp(searchInp))
  //   }
  //   fetchUserData();
  // }, [searchInp]);

  return (
    <>
      <SearchTopBar
        searchInp={searchInp}
        setSearchInp={setSearchInp}
      />

      {/* {isLoading ? (
          <Loading />
        ) : ( */}
      <StyledSection>
        <StyledUl>
          {
            userData.map((userDataitem, index) => {
              return (
                <UserList
                  key={index}
                  image={userDataitem.image}
                  username={userDataitem.username}
                  accountname={userDataitem.accountname}
                  searchInp={searchInp} />
              )
            })
          }
        </StyledUl>
        <div ref={setTarget}></div>
      </StyledSection>
      {/* )} */}
    </>
  )
}
