import MainLayout from "../components/layouts/MainLayout";
import { SlArrowRight } from "react-icons/sl";
import { CiHome, CiShoppingBasket } from "react-icons/ci";
import { Link } from "react-router-dom";
import { GoHeart, GoHeartFill } from "react-icons/go";

export default function DetailPage() {
  return (
    <MainLayout>
      <div className="text-xs ml-2 flex items-center mb-12">
        <Link to={"/"}>
          <CiHome size={18} style={{ marginRight: "8px" }} />
        </Link>
        <SlArrowRight />
        <span className="mx-2">book</span>
        <SlArrowRight />
        <span className="ml-2">미움받을 용기</span>
      </div>
      <div className="px-2">
        <div className="border-b-1 pb-6">
          <h3 className="font-light text-xl mb-3">미움받을 용기</h3>
          <p className="text-neutral-600 text-sm">
            기시미 이치로, 고가 후미타케 (지은이), 전경아 (옮긴이)
          </p>
        </div>
        <div className="flex pt-6">
          <img
            className="aspect-2/3 object-cover w-44 sm:w-60 md:w-84 transition-width duration-100 shadow-md rounded-sm"
            src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
          />
          <div className="px-5 pt-3 w-full flex flex-col">
            <div className="text-sm w-40">
              <div className="w-full flex items-center justify-between">
                <div className="px-1 border-1 font-light">정가</div>
                <span className="text-neutral-600">16,800</span>
              </div>
              <div className="mt-2 w-full flex items-center justify-between">
                <div className="px-1 border-1 bg-lime-400 font-light h-fit">
                  판매가
                </div>
                <span className="text-base">12,000</span>
              </div>
            </div>
            <div className="my-4 text-sm font-light line-clamp-5 leading-6">
              인간은 변할 수 있고, 누구나 행복해 질 수 있다. 단 그러기 위해서는
              ‘용기’가 필요하다고 말한 철학자가 있다. 바로 프로이트, 융과 함께
              ‘심리학의 3대 거장’으로 일컬어지고 있는 알프레드 아들러다.
              『미움받을 용기』는 아들러 심리학에 관한 일본의 1인자 철학자
              기시미 이치로와 베스트셀러 작가인 고가 후미타케의 저서로, 아들러의
              심리학을 ‘대화체’로 쉽고 맛깔나게 정리하고 있다. 아들러 심리학을
              공부한 철학자와 세상에 부정적이고 열등감 많은
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
    </MainLayout>
  );
}
