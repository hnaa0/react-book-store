import { Link } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import { SlQuestion } from "react-icons/sl";
import { Tooltip } from "react-tooltip";
import { useDispatch, useSelector } from "react-redux";
import { FiMinus, FiPlus } from "react-icons/fi";
import { addBook, removeBook } from "../core/slices/cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const { totalCount, cart } = useSelector((state) => state.cart);

  const DELIVERY_FEE = 3000;
  const DELIVERY_FEE_STANDARD = 50000;

  const totalPrice = Object.values(cart).reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);

  return (
    <MainLayout>
      <h2 className="text-lg md:text-xl ml-2">Cart({totalCount})</h2>
      <div className="mt-6 mb-32">
        {totalCount === 0 ? (
          <ul>
            <li className="px-2 py-16 text-sm text-neutral-600 text-center">
              장바구니가 비어있습니다
            </li>
          </ul>
        ) : (
          <ul className="divide-y">
            {Object.values(cart).map((item) => {
              return (
                <li key={item.isbn} className="px-2 py-3 flex">
                  <img
                    className="aspect-2/3 w-20 md:w-24 object-cover"
                    src={item.thumbnail}
                    alt=""
                  />
                  <div className="w-full ml-3 mt-1 flex flex-col justify-between">
                    <div>
                      <p className="text-sm line-clamp-1 mb-2">{item.title}</p>
                      <span className="text-xs line-clamp-1">
                        {item.authors.length > 1
                          ? `${item.authors[0]} 외 ${item.authors.length - 1}인`
                          : item.authors}
                      </span>
                    </div>
                    <div className="flex">
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
                      <div className="ml-auto">
                        <span className="text-sm">
                          {(item.price * item.count).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
        <div className="border-t-1 my-4 pt-4">
          <div className="flex justify-end text-sm text-neutral-600">
            <div className="flex justify-between w-full sm:w-52">
              <span>상품 금액</span>
              <span className="ml-2">{totalPrice.toLocaleString()}</span>
            </div>
          </div>
          <div className="flex justify-end items-center text-sm text-neutral-600">
            <div className="flex justify-between w-full sm:w-52">
              <div className="flex items-center">
                <span>배송비</span>
                <SlQuestion
                  size={16}
                  className="ml-1"
                  data-tooltip-id="delivery-fee"
                  data-tooltip-content="5만원 이상 구매시 무료배송"
                  data-tooltip-delay-hide={1000}
                />
                <Tooltip
                  id="delivery-fee"
                  style={{ color: "oklch(74.6% 0.16 232.661)" }}
                />
              </div>
              <span className="ml-2">
                {totalPrice === 0
                  ? "-"
                  : totalPrice > DELIVERY_FEE_STANDARD
                  ? "0"
                  : DELIVERY_FEE}
              </span>
            </div>
          </div>
          <div className="flex justify-end mt-2">
            <div className="flex justify-between w-full sm:w-52">
              <span>총 주문금액</span>
              <span className="ml-2">
                {totalPrice === 0
                  ? "-"
                  : totalPrice > DELIVERY_FEE_STANDARD
                  ? totalPrice.toLocaleString()
                  : (totalPrice + DELIVERY_FEE).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
        <Link to={"/order"}>
          <button
            disabled={totalPrice === 0}
            className="w-full border-1 border-lime-400 hover:border-black hover:bg-lime-400 py-1 text-center cursor-pointer"
          >
            주문하기
          </button>
        </Link>
      </div>
    </MainLayout>
  );
}
