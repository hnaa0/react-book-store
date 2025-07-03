import { GoHeartFill } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex flex-col items-center w-full px-2 pb-10">
      <div className="w-full max-w-7xl flex justify-center relative">
        <Link to="/likes">
          <div className="group cursor-pointer ">
            <GoHeartFill
              size={20}
              className="invisible group-hover:visible absolute top-5.5 translate-y-[50%] right-4 -translate-x-[50%]"
            />
            <span className="text-lg absolute top-5 right-2 p-2 group-hover:text-rose-500">
              LIKE
            </span>
          </div>
        </Link>
        <h1 className="font-extrabold italic p-2 pt-20">BooKStore</h1>
      </div>
    </div>
  );
}
