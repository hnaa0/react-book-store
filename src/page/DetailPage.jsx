import MainLayout from "../components/layouts/MainLayout";
import { SlArrowRight } from "react-icons/sl";
import { CiHome, CiShoppingBasket } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useEffect, useMemo, useState } from "react";
import { getBookDetailApi } from "../services/bookService";
import { useSelector } from "react-redux";
import { BounceLoader } from "react-spinners";

export default function DetailPage() {
  const { bookId } = useParams();
  const formattedBookId = bookId.split(" ")[0];

  const { books, loading } = useSelector((state) => state.books);

  const [fallbackBook, setFallbackBook] = useState(null); // store에 없을 시 fallback용
  const [localLoading, setLocalLoading] = useState(false);

  const findBook = useMemo(() => {
    return books.find((book) => book.isbn === formattedBookId);
  }, [books, formattedBookId]);

  // 도서 데이터 로드
  useEffect(() => {
    const fetchData = async () => {
      if (!findBook) {
        try {
          setLocalLoading(true);
          const res = await getBookDetailApi({
            query: formattedBookId,
            target: "isbn",
            page: 1,
          });

          setFallbackBook(res.documents[0]);
        } catch (error) {
          console.log(error);
        } finally {
          setLocalLoading(false);
        }
      }
    };

    fetchData();
  }, [formattedBookId, findBook]);

  const bookDetail = findBook || fallbackBook;

  return (
    <MainLayout>
      {loading || localLoading ? (
        <BounceLoader
          size={36}
          aria-label="Loading Spinner"
          cssOverride={{
            margin: "0 auto",
          }}
          color="oklch(84.1% 0.238 128.85)"
        />
      ) : (
        <>
          <div className="text-xs ml-2 flex items-center mb-12">
            <Link to={"/"}>
              <CiHome size={18} style={{ marginRight: "8px" }} />
            </Link>
            <SlArrowRight />
            <span className="mx-2">book</span>
            <SlArrowRight />
            <span className="ml-2">{bookDetail?.title}</span>
          </div>
          <div className="px-2 mb-20">
            <div className="border-b-1 pb-6">
              <h3 className="font-light text-xl md:text-2xl mb-3">
                {bookDetail?.title}
              </h3>
              <p className="text-neutral-600 text-sm">
                {bookDetail?.authors.map((item) => (
                  <span key={item}>{item}</span>
                ))}{" "}
                (지은이)
              </p>
              {bookDetail?.translators.length > 0 && (
                <p className="text-neutral-600 text-sm">
                  {bookDetail?.translators.map((item) => (
                    <span key={item}>{item}</span>
                  ))}{" "}
                  (옮긴이)
                </p>
              )}
            </div>
            <div className="flex flex-col sm:flex-row pt-6 ">
              <div className="flex justify-center h-60 sm:h-full sm:w-80 aspect-2/3">
                <img
                  className="object-cover w-fit sm:w-full h-full transition-width duration-100 shadow-md rounded-sm"
                  src={bookDetail?.thumbnail}
                />
              </div>
              <div className="px-5 pt-3 w-full flex flex-col">
                <div className="text-sm w-full sm:w-40">
                  <div className="w-full flex items-center justify-between">
                    <div className="px-1 border-1 font-light">정가</div>
                    <span className="text-neutral-600">
                      {bookDetail?.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="mt-2 w-full flex items-center justify-between">
                    <div className="px-1 border-1 bg-lime-400 font-light h-fit">
                      판매가
                    </div>
                    <span className="text-base">
                      {bookDetail?.sale_price === -1
                        ? bookDetail?.price.toLocaleString()
                        : bookDetail?.sale_price.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="text-sm mt-8 mb-3 sm:mb-5 text-neutral-600 font-light">
                  <div className="flex">
                    <div className="text-nowrap mr-2">출판사</div>
                    <span>{bookDetail?.publisher}</span>
                  </div>
                  <div className="flex text-xs">
                    <div className="mr-2">isbn</div>
                    <span>{bookDetail?.isbn}</span>
                  </div>
                </div>
                <div className="border-t border-sky-400 pt-3 sm:pt-5 mb-5 text-sm md:text-base font-light line-clamp-5 leading-6">
                  {bookDetail?.contents}…
                </div>
                <div className="mt-auto flex gap-2">
                  <div className="cursor-pointer flex border-1 items-center justify-center h-8 sm:h-9 w-full shrink">
                    <span className="text-sm mr-1">장바구니에 담기</span>
                    <CiShoppingBasket size={24} />
                  </div>
                  <div className="cursor-pointer border-1 h-8 w-8 sm:h-9 sm:w-9 flex-none flex items-center justify-center">
                    <GoHeart size={20} />
                  </div>
                  <div className="cursor-pointer border-1 h-8 w-8 sm:h-9 sm:w-9 flex-none flex items-center justify-center">
                    <GoHeartFill size={20} fill="oklch(74% 0.238 322.16)" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </MainLayout>
  );
}
