import { CiSearch } from "react-icons/ci";
import Cart from "../components/Cart";
import ItemGrid from "../components/ItemGrid";
import MainLayout from "../components/layouts/MainLayout";

export default function MainPage() {
  return (
    <MainLayout>
      {/* 검색바 */}
      <div className="relative flex justify-center w-full md:px-50">
        <input
          type="text"
          className="peer pl-12 h-12 w-full transition duration-150 px-3 py-2 border-1 border-sky-400 outline-none focus:border-lime-400"
        />

        <CiSearch
          size={22}
          className="absolute top-[50%] -translate-y-[50%] left-3 md:left-53 peer-focus:text-sky-500"
        />
      </div>
      <div className="pt-10">
        <ItemGrid />
      </div>
      <Cart />
    </MainLayout>
  );
}
