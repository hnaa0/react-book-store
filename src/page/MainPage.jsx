import { CiFaceFrown, CiSearch } from "react-icons/ci";
import Cart from "../components/Cart";
import ItemGrid from "../components/ItemGrid";
import MainLayout from "../components/layouts/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { searchBooks } from "../core/slices/bookSlice";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { BounceLoader } from "react-spinners";

export default function MainPage() {
  const dispatch = useDispatch();
  const { books, loading, meta, page } = useSelector((state) => state.books);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchTarget, setSearchTarget] = useState("title");
  const [isSearch, setIsSearch] = useState(false);

  const BOOK_SIZE = 10;

  // 도서 검색 함수
  const handleSearchBooks = () => {
    dispatch(searchBooks({ query: searchTerm, target: searchTarget, page: 1 }));
    setIsSearch(true);
  };

  // 무한 스크롤
  const [infiniteRef] = useInfiniteScroll({
    loading,
    hasNextPage: meta && page < Math.ceil(meta.total_count / BOOK_SIZE),
    onLoadMore: () => {
      const nextPage = page + 1;
      dispatch(
        searchBooks({ query: searchTerm, target: searchTarget, page: nextPage })
      );
    },
    disabled: loading,
    rootMargin: "0px 0px 50px 0px",
  });

  return (
    <MainLayout>
      {/* 검색바 */}
      <div className="relative flex justify-center w-full md:px-50">
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearchBooks();
            }
          }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          disabled={loading}
          className="peer pl-12 h-12 w-full transition duration-150 px-3 py-2 border-1 border-sky-400 outline-none focus:border-lime-400"
        />

        <CiSearch
          size={22}
          className="absolute top-[50%] -translate-y-[50%] left-3 md:left-53 peer-focus:text-sky-500"
        />
      </div>
      <div className="py-10">
        <ItemGrid />
        {isSearch && books.length === 0 && (
          <div className="py-20 flex flex-col items-center">
            <CiFaceFrown size={32} color="oklch(84.1% 0.238 128.85)" />
            <span className="text-sm mt-2">검색결과가 없습니다.</span>
          </div>
        )}
        {isSearch && books.length !== 0 && !meta.is_end && (
          <div className="py-16">
            <BounceLoader
              ref={infiniteRef}
              size={36}
              aria-label="Loading Spinner"
              cssOverride={{
                margin: "0 auto",
              }}
              color="oklch(84.1% 0.238 128.85)"
            />
          </div>
        )}
        {isSearch && books.length !== 0 && meta?.is_end && (
          <div className="flex justify-center pt-16">
            <div className="text-xs px-2 py-1 rounded-full bg-lime-200 border-1 border-sky-300 w-fit font-light">
              모든 검색 결과를 불러왔습니다
            </div>
          </div>
        )}
      </div>
      <Cart />
    </MainLayout>
  );
}
