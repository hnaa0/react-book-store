import { useEffect, useState } from "react";
import { CiShoppingBasket } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addBook, removeBook } from "../core/slices/cartSlice";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function Cart() {
  const dispatch = useDispatch();
  const { cart, totalCount } = useSelector((state) => state.cart);

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const handleCartAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  // 장바구니 width 감지
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, []);

  return (
    <div
      className={`transition-all duration-250 fixed absolute bottom-10 right-5 w-10 sm:w-76 sm:right-10 ${
        isAccordionOpen
          ? totalCount === 0
            ? "h-80 w-76"
            : "h-120 w-76"
          : "h-10"
      } border-1 bg-white z-10`}
    >
      <div
        onClick={handleCartAccordion}
        className={`cursor-pointer flex items-center h-10 justify-center ${
          isAccordionOpen ? "mb-auto" : null
        }`}
      >
        {windowWidth >= 640 ? (
          <>
            <span className="text-sm mr-1">cart({totalCount})</span>
            <CiShoppingBasket size={22} />
          </>
        ) : (
          <CiShoppingBasket size={22} />
        )}
      </div>
      <div className={`px-2 ${isAccordionOpen ? "visible" : "invisible"}`}>
        <div
          className={`${
            totalCount === 0 ? "h-52" : "h-92"
          } pb-4 overflow-y-auto`}
        >
          {totalCount === 0 ? (
            <div className="flex items-center justify-center h-full text-neutral-600 text-xs md:text-sm">
              장바구니가 비어있습니다
            </div>
          ) : (
            <ul className="divide-y divide-sky-400">
              {Object.values(cart).map((item) => (
                <li className="px-2 py-3 flex" key={item.isbn}>
                  <img
                    className="aspect-2/3 w-18 object-cover"
                    src={item?.thumbnail}
                    alt="책 표지"
                  />
                  <div className="w-full ml-2 mt-1 flex flex-col justify-between">
                    <div>
                      <Link to={`detail/${item.isbn}`}>
                        <p className="text-sm line-clamp-1 mb-2 hover:underline decoration-lime-400">
                          {item?.title}
                        </p>
                      </Link>
                      <span className="text-xs line-clamp-1">
                        {item.authors.length > 1
                          ? `${item.authors[0]} 외 ${item.authors.length - 1}인`
                          : item.authors}
                      </span>
                    </div>
                    <div className="flex text-xs">
                      <div>
                        <div className="flex items-center text-sm">
                          <FiMinus
                            className="cursor-pointer"
                            onClick={() => dispatch(removeBook(item))}
                          />
                          <span className="mx-2">{item.count}</span>
                          <FiPlus
                            className="cursor-pointer"
                            onClick={() => dispatch(addBook(item))}
                          />
                        </div>
                      </div>
                      <span className="ml-auto">
                        {(item.price * item.count).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <Link to={"/cart"}>
          <div className="mt-8 w-full border-1 border-lime-400 hover:border-black hover:bg-lime-400 cursor-pointer text-center py-1 text-sm">
            장바구니로 이동
          </div>
        </Link>
      </div>
    </div>
  );
}
