import axios from "axios";

const BASE_URL = "https://dapi.kakao.com";
const API_KEY = import.meta.env.VITE_KAKAO_APP_KEY;

const kakao = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: "KakaoAK " + API_KEY,
  },
});

// 책 목록 검색
export const getBooksApi = async (params) => {
  const res = await kakao.get("/v3/search/book", { params });
  return { documents: res.data.documents, meta: res.data.meta };
};

// isbn으로 책 검색
export const getBookDetailApi = async (params) => {
  const res = await kakao.get("/v3/search/book", { params });
  return { documents: res.data.documents, meta: res.data.meta };
};
