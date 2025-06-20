import { Link } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import { SlQuestion } from "react-icons/sl";
import { Tooltip } from "react-tooltip";

export default function CartPage() {
  return (
    <MainLayout>
      <h2 className="text-lg ml-2">Cart(4)</h2>
      <div className="mt-6">
        <ul className="divide-y">
          <li className="px-2 py-3 flex">
            <img
              className="aspect-2/3 w-20 md:w-24 object-cover"
              src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              alt=""
            />
            <div className="w-full ml-3 mt-1 flex flex-col justify-between">
              <div>
                <p className="text-sm line-clamp-1 mb-2">title book title</p>
                <span className="text-xs line-clamp-1">author name</span>
              </div>
              <span className="text-sm ml-auto">12,000</span>
            </div>
          </li>
          <li className="px-2 py-3 flex">
            <img
              className="aspect-2/3 w-20 md:w-24 object-cover"
              src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              alt=""
            />
            <div className="w-full ml-3 mt-1 flex flex-col justify-between">
              <div>
                <p className="text-sm line-clamp-1 mb-2">title book title</p>
                <span className="text-xs line-clamp-1">author name</span>
              </div>
              <span className="text-sm ml-auto">26,000</span>
            </div>
          </li>
        </ul>
        <div className="border-t-1 my-4 pt-4">
          <div className="flex justify-end text-sm text-neutral-600">
            <span>상품 금액</span>
            <span className="ml-2 w-22 text-end">38,000</span>
          </div>
          <div className="flex justify-end items-center text-sm text-neutral-600">
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
            <span className="ml-2 w-22 text-end">3,000</span>
          </div>
          <div className="flex justify-end mt-2">
            <span>총 주문금액</span>
            <span className="ml-6">41,000</span>
          </div>
        </div>
        <Link to={"/order"}>
          <div className="border-1 border-lime-400 hover:border-black hover:bg-lime-400 py-1 text-center cursor-pointer">
            주문하기
          </div>
        </Link>
      </div>
    </MainLayout>
  );
}
