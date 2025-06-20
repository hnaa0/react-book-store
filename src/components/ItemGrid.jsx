import { Link } from "react-router-dom";

export default function ItemGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      <Link to={"/detail/123"}>
        <div className="border-1 group hover:border-sky-400 relative">
          <img
            className="object-cover aspect-2/3 group-hover:brightness-90 transition duration-150"
            src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
            alt="책 표지 이미지"
          />
          <div className="hidden group-hover:block px-2 py-3 absolute bottom-0 bg-black/30 text-white w-full">
            <p>ABC</p>
            <p className="font-light text-sm pt-3 overflow-hidden text-ellipsis line-clamp-1">
              sdffsdfsdfsdf ffsdf ffsdf 가나ㅏ나다ㅏ라ㅏ다
            </p>
          </div>
        </div>
      </Link>
      <div className="border-1 group hover:border-sky-400 relative">
        <img
          className="object-cover aspect-2/3 group-hover:brightness-90 transition duration-150"
          src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
          alt="책 표지 이미지"
        />
        <div className="hidden group-hover:block px-2 py-3 absolute bottom-0 bg-black/30 text-white w-full">
          <p>ABC</p>
          <p className="font-light text-sm pt-3 overflow-hidden text-ellipsis line-clamp-1">
            sdffsdfsdfsdf ffsdf ffsdf 가나ㅏ나다ㅏ라ㅏ다
          </p>
        </div>
      </div>
      <div className="border-1 group hover:border-sky-400 relative">
        <img
          className="object-cover aspect-2/3 group-hover:brightness-90 transition duration-150"
          src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
          alt="책 표지 이미지"
        />
        <div className="hidden group-hover:block px-2 py-3 absolute bottom-0 bg-black/30 text-white w-full">
          <p>ABC</p>
          <p className="font-light text-sm pt-3 overflow-hidden text-ellipsis line-clamp-1">
            sdffsdfsdfsdf ffsdf ffsdf 가나ㅏ나다ㅏ라ㅏ다
          </p>
        </div>
      </div>
    </div>
  );
}
