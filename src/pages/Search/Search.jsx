import { useEffect, useRef, useState } from "react";
import UserList from "../../components/common/UserList/UserList";
import SearchTopBar from "../../components/TopBar/SearchTopBar/SearchTopBar";
import useUserContext from "../../hooks/useUserContext";
import { StyledSection, StyledUl } from "./styledSearch";

export default function Search() {
  const { token } = useUserContext();
  const [searchInp, setSearchInp] = useState("");
  const [userData, setUserData] = useState([]); // 뿌려줄 데이터

  const [tempData, setTempData] = useState([]); // 임시로 들어갈 데이터
  const [offset, setOffset] = useState(0);
  const observeTarget = useRef(); // 감시할 target

  const url = "https://mandarin.api.weniv.co.kr";
  const reqPath = `/user/searchuser/?keyword=${searchInp}`;

  const callbackFunction = (entries) => {
    const [entry] = entries;
    if (tempData.length > offset && entry.isIntersecting) {
      setOffset((offset) => offset + 15);
    }
  };

  // 옵션
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  // 데이터 가져오기
  const fetchUserData = async () => {
    if (searchInp === "") {
      setUserData([]);
      setTempData([]);
      return;
    }
    try {
      const res = await fetch(url + reqPath, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      setOffset(15);
      setUserData([]);
      setTempData(data);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    if (!token) return;
    fetchUserData();
  }, [searchInp]);

  // API
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (observeTarget.current) {
      observer.observe(observeTarget.current);
    }
    return () => {
      if (observeTarget.current) {
        observer.unobserve(observeTarget.current);
      }
    };
  }, [observeTarget, options]);

  useEffect(() => {
    const copyData = [...userData];
    copyData.push(...tempData.slice(offset - 15, offset));
    setUserData(copyData);
  }, [tempData, offset]);

  // 서치 탑바에서 가져온 inpvalue
  function handleSearchInput(e) {
    setSearchInp(e.target.value);
  }

  return (
    <>
      <SearchTopBar
        searchInp={searchInp}
        handleSearchInput={handleSearchInput}
      />

      <StyledSection>
        <StyledUl>
          {userData.map((userDataitem, index) => {
            return (
              <UserList
                key={index}
                image={userDataitem.image}
                username={userDataitem.username}
                accountname={userDataitem.accountname}
                searchInp={searchInp}
              />
            );
          })}
        </StyledUl>
        <div ref={observeTarget}></div>
      </StyledSection>
    </>
  );
}
