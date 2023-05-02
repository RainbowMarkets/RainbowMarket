import { useState } from "react";
import useUserContext from "./useUserContext";

export default function useFetch() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const { token } = useUserContext();

  const url = "https://api.mandarin.weniv.co.kr";

  const getData = async (req) => {
    setIsPending(true);

    return fetch(url + req, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }).then((res) => {
      setIsPending(false);
      if (res.ok) return res.json();
      else {
        setError(`${res.status} : ${res.statusText}`);
        throw new Error(res.statusText);
      }
    });
  };

  const postData = async (req, body) => {
    setIsPending(true);

    return fetch(url + req, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => {
      setIsPending(false);
      if (res.ok) return res.json();
      else {
        setError(`${res.status} : ${res.statusText}`);
        throw new Error(res.statusText);
      }
    });
  };

  const putData = async (req, body) => {
    setIsPending(true);

    return fetch(url + req, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => {
      setIsPending(false);
      if (res.ok) return res.json();
      else {
        setError(`${res.status} : ${res.statusText}`);
        throw new Error(res.statusText);
      }
    });
  };

  const deleteData = async (req) => {
    setIsPending(true);

    return fetch(url + req, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }).then((res) => {
      setIsPending(false);
      if (res.ok) return res.json();
      else {
        setError(`${res.status} : ${res.statusText}`);
        throw new Error(res.statusText);
      }
    });
  };

  const uploadImage = async (body) => {
    setIsPending(true);

    return fetch(url + "/image/uploadfile", {
      method: "POST",
      body: body,
    }).then((res) => {
      setIsPending(false);
      if (res.ok) return res.json();
      else {
        setError(`${res.status} : ${res.statusText}`);
        throw new Error(res.statusText);
      }
    });
  };

  return {
    getData,
    postData,
    putData,
    deleteData,
    uploadImage,
    isPending,
    error,
  };
}
