import useUserContext from "./useUserContext";

export default function useFetch() {
  const { token } = useUserContext();

  const url = "https://mandarin.api.weniv.co.kr";

  const getData = async (req) => {
    return fetch(url + req, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }).then((res) => {
      if (res.ok) return res.json();
      else throw new Error(res.statusText);
    });
  };

  const postData = async (req, body) => {
    return fetch(url + req, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.ok) return res.json();
      else throw new Error(res.statusText);
    });
  };

  const putData = async (req, body) => {
    return fetch(url + req, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.ok) return res.json();
      else throw new Error(res.statusText);
    });
  };

  const deleteData = async (req) => {
    return fetch(url + req, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }).then((res) => {
      if (res.ok) return res.json();
      else throw new Error(res.statusText);
    });
  };

  const uploadImage = async (body) => {
    return fetch(url + "/image/uploadfile", {
      method: "POST",
      body: body,
    }).then((res) => {
      if (res.ok) return res.json();
      else throw new Error(res.statusText);
    });
  };

  return { getData, postData, putData, deleteData, uploadImage };
}
