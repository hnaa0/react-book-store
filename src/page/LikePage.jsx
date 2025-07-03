import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../components/layouts/MainLayout";
import { Link } from "react-router-dom";
import { removeLike } from "../core/slices/likeSlice";
import { FaXmark } from "react-icons/fa6";

export default function LikePage() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.like);

  // 마음함 제거 함수
  const handleDeleteLike = (e, item) => {
    e.preventDefault();
    dispatch(removeLike(item));
  };

  return (
    <MainLayout>
      <h2 className="text-lg md:text-xl ml-2">
        Likes({Object.values(items).length})
      </h2>
      <div className="py-10">
        {Object.values(items).length === 0 ? (
          <div className="py-20 text-neutral-400 w-full text-center">
            마음함이 비어 있습니다
          </div>
        ) : (
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {Object.values(items).map((item, index) => (
              <Link key={`${item.isbn}_${index}`} to={`/detail/${item.isbn}`}>
                <div className="aspect-2/3 border-1 group hover:border-sky-400 relative">
                  <FaXmark
                    onClick={(e) => handleDeleteLike(e, item)}
                    className="z-10 opacity-100 absolute top-2 right-2 text-white bg-sky-400/35 p-1 border-1"
                    size={24}
                  />
                  {item.thumbnail ? (
                    <img
                      src={item.thumbnail}
                      alt="책 표지"
                      className="object-cover w-full h-full group-hover:brightness-90 transition duration-150"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-sky-100 group-hover:brightness-90 transition duration-150">
                      <CiImageOff size={28} />
                    </div>
                  )}
                  <div className="hidden group-hover:block px-2 py-3 absolute bottom-0 bg-black/30 text-white w-full">
                    <p className="text-sm sm:text-base text-ellipsis line-clamp-1">
                      {item.title}
                    </p>
                    <p className="font-light text-xs sm:text-sm pt-3 overflow-hidden text-ellipsis line-clamp-1 sm:line-clamp-2">
                      {item.authors.map((author) => author)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}
